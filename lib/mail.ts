import { firm } from "@/lib/site";
import type { InquiryFields } from "@/lib/validation";

export const inquiryRecipient = firm.email;

function inquiryText(fields: InquiryFields) {
  return [
    "A new consultation inquiry was submitted on the FGDLaw website.",
    "",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    "",
    "Message:",
    fields.message,
  ].join("\n");
}

async function sendWithResend(fields: InquiryFields, to: string) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return false;

  const from =
    process.env.INQUIRY_FROM_EMAIL?.trim() ||
    "FGDLaw Website <beth.t@example.com>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: fields.email,
      subject: `New consultation inquiry from ${fields.name}`,
      text: inquiryText(fields),
    }),
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("[fgdlaw] Resend delivery failed", response.status, detail);
    return false;
  }

  return true;
}

async function sendWithFormSubmit(fields: InquiryFields, to: string) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(to)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: fields.name,
        email: fields.email,
        message: fields.message,
        _subject: `New consultation inquiry from ${fields.name}`,
        _template: "box",
        _captcha: "false",
        _replyto: fields.email,
      }),
      signal: AbortSignal.timeout(15000),
    },
  );

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("[fgdlaw] FormSubmit delivery failed", response.status, detail);
    return false;
  }

  return true;
}

export async function sendInquiryEmail(fields: InquiryFields) {
  const to = process.env.INQUIRY_TO_EMAIL?.trim() || inquiryRecipient;

  if (await sendWithResend(fields, to)) return true;
  if (await sendWithFormSubmit(fields, to)) return true;

  return false;
}
