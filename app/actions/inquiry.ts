"use server";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
};

function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const name = readField(formData, "name");
  const email = readField(formData, "email");
  const message = readField(formData, "message");

  if (name.length < 2) {
    return { status: "error", message: "Please enter your full name." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (message.length < 12) {
    return {
      status: "error",
      message: "Please briefly describe your legal concern.",
    };
  }

  console.info("[fgdlaw] consultation inquiry", {
    name,
    email,
    messageLength: message.length,
  });

  return {
    status: "success",
    message:
      "Thank you. Your inquiry has been recorded. Our Manila office will follow up using the email you provided. You may also reach us at info@fgdlaw.net or (632) 727-5011-2.",
  };
}
