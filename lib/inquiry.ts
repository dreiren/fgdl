import { firm } from "@/lib/site";
import type { InquiryFieldErrors } from "@/lib/validation";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: InquiryFieldErrors;
};

export const INQUIRY_ENDPOINT = "/inquiry.php";
export const INQUIRY_LOCK_KEY = "fgdlaw_inquiry_sent";
export const INQUIRY_LOCK_MS = 15 * 60 * 1000;

export const inquirySuccessMessage =
  `Thank you. Your inquiry has been sent to ${firm.email}. Our Manila office will follow up using the email you provided. You may also reach us at (632) 727-5011-2.`;

export const inquiryDuplicateMessage =
  "Your inquiry was already sent. Please wait a few minutes before sending another message.";

export const inquiryDeliveryErrorMessage =
  `We could not send your inquiry just now. Please email ${firm.email} directly or try again in a moment.`;

export type InquiryResponse = {
  ok: boolean;
  message?: string;
  fieldErrors?: InquiryFieldErrors;
};

export function wasInquirySentRecently() {
  if (typeof window === "undefined") return false;
  const last = Number(window.localStorage.getItem(INQUIRY_LOCK_KEY) ?? "");
  return Number.isFinite(last) && Date.now() - last < INQUIRY_LOCK_MS;
}

export function markInquirySent() {
  window.localStorage.setItem(INQUIRY_LOCK_KEY, String(Date.now()));
}
