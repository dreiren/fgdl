import nodemailer from "nodemailer";
import { firm } from "@/lib/site";
import type { InquiryFields } from "@/lib/validation";

export const inquiryRecipient = firm.email;

export function getInquiryRecipient() {
  return process.env.INQUIRY_TO_EMAIL?.trim() || inquiryRecipient;
}

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

async function sendWithSmtp(fields: InquiryFields, to: string) {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return false;

  const port = Number(process.env.SMTP_PORT ?? 587);
  const transporter = nodemailer.createTransport({
    host,
    port: Number.isFinite(port) ? port : 587,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: process.env.INQUIRY_FROM_EMAIL?.trim() || `"FGDLaw Website" <${user}>`,
    to,
    replyTo: fields.email,
    subject: `New consultation inquiry from ${fields.name}`,
    text: inquiryText(fields),
  });

  return true;
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

export async function sendInquiryEmail(fields: InquiryFields) {
  const to = getInquiryRecipient();

  if (process.env.INQUIRY_MAIL_DRIVER === "log") {
    console.info("[fgdlaw] inquiry mail (log driver)", {
      to,
      email: fields.email,
      messageLength: fields.message.length,
    });
    return true;
  }

  try {
    if (await sendWithSmtp(fields, to)) return true;
  } catch (error) {
    console.error("[fgdlaw] SMTP delivery failed", error);
  }

  if (await sendWithResend(fields, to)) return true;

  return false;
}
