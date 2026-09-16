import { cookies } from "next/headers";
import {
  inquiryDeliveryErrorMessage,
  inquiryDuplicateMessage,
  inquirySuccessMessage,
  type InquiryState,
} from "@/lib/inquiry";
import { getInquiryRecipient, sendInquiryEmail } from "@/lib/mail";
import {
  normalizeField,
  validateInquiry,
  type InquiryFields,
} from "@/lib/validation";

const SENT_COOKIE = "fgdlaw_inquiry_sent";
const RESUBMIT_WINDOW_SECONDS = 15 * 60;

export function readInquiryFields(input: unknown): InquiryFields {
  const source =
    input && typeof input === "object" ? (input as Record<string, unknown>) : {};
  return {
    name: normalizeField(source.name),
    email: normalizeField(source.email),
    message: normalizeField(source.message),
  };
}

export async function processInquiry(input: unknown): Promise<InquiryState> {
  const fields = readInquiryFields(input);
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
      message: inquiryDuplicateMessage,
    };
  }

  const delivered = await sendInquiryEmail(fields);
  if (!delivered) {
    return {
      status: "error",
      message: inquiryDeliveryErrorMessage,
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
    to: getInquiryRecipient(),
    email: fields.email,
    messageLength: fields.message.length,
  });

  return {
    status: "success",
    message: inquirySuccessMessage,
  };
}
