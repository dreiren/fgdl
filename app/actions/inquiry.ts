"use server";

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

  console.info("[fgdlaw] consultation inquiry", {
    name: fields.name,
    email: fields.email,
    messageLength: fields.message.length,
  });

  return {
    status: "success",
    message:
      "Thank you. Your inquiry has been recorded. Our Manila office will follow up using the email you provided. You may also reach us at info@fgdlaw.net or (632) 727-5011-2.",
  };
}
