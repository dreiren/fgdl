"use server";

import { cookies } from "next/headers";
import { sendInquiryEmail, inquiryRecipient } from "@/lib/mail";
import {
  normalizeField,
  validateInquiry,
  type InquiryFieldErrors,
} from "@/lib/validation";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: InquiryFieldErrors;
};

const SENT_COOKIE = "fgdlaw_inquiry_sent";
const RESUBMIT_WINDOW_SECONDS = 15 * 60;

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const fields = {
    name: normalizeField(formData.get("name")),
    email: normalizeField(formData.get("email")),
    message: normalizeField(formData.get("message")),
  };
  const fieldErrors = validateInquiry(fields);

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors,
    };
  }

  const jar = await cookies();
  const lastSent = Number(jar.get(SENT_COOKIE)?.value ?? "");
  if (Number.isFinite(lastSent) && Date.now() - lastSent < RESUBMIT_WINDOW_SECONDS * 1000) {
    return {
      status: "error",
      message:
        "Your inquiry was already sent. Please wait a few minutes before sending another message.",
    };
  }

  const delivered = await sendInquiryEmail(fields);
  if (!delivered) {
    return {
      status: "error",
      message:
        `We could not send your inquiry just now. Please email ${inquiryRecipient} directly or try again in a moment.`,
    };
  }

  jar.set(SENT_COOKIE, String(Date.now()), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: RESUBMIT_WINDOW_SECONDS,
    path: "/",
  });

  console.info("[fgdlaw] consultation inquiry emailed", {
    to: inquiryRecipient,
    email: fields.email,
    messageLength: fields.message.length,
  });

  return {
    status: "success",
    message:
      `Thank you. Your inquiry has been sent to ${inquiryRecipient}. Our Manila office will follow up using the email you provided. You may also reach us at (632) 727-5011-2.`,
  };
}
