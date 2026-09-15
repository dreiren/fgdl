export const FIELD_LIMITS = {
  name: { min: 2, max: 80 },
  email: { min: 5, max: 254 },
  message: { min: 12, max: 2000 },
} as const;

export type InquiryFields = {
  name: string;
  email: string;
  message: string;
};

export type InquiryFieldErrors = Partial<Record<keyof InquiryFields, string>>;

const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;

const SCRIPT_INJECTION = [
  /<\/?[a-zA-Z]/,
  /javascript\s*:/i,
  /vbscript\s*:/i,
  /data\s*:\s*text\s*\/\s*html/i,
  /\bon[a-z]+\s*=/i,
  /srcdoc\s*=/i,
  /expression\s*\(/i,
];

function fromCodePointSafe(code: number) {
  if (!Number.isFinite(code) || code < 1 || code > 0x10ffff) return "";
  try {
    return String.fromCodePoint(code);
  } catch {
    return "";
  }
}

function decodeForInspection(value: string) {
  let current = value.normalize("NFKC");
  try {
    current = decodeURIComponent(current);
  } catch {
    // Keep the original text when percent-encoding is malformed.
  }
  return current
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#x0*([0-9a-f]+);?/gi, (_, hex: string) =>
      fromCodePointSafe(Number.parseInt(hex, 16)),
    )
    .replace(/&#0*(\d+);?/g, (_, dec: string) =>
      fromCodePointSafe(Number(dec)),
    );
}

export function containsScriptInjection(value: string) {
  const decoded = decodeForInspection(value);
  const haystack = `${value}\n${decoded}`;
  if (CONTROL_CHARS.test(value) || CONTROL_CHARS.test(decoded)) return true;
  return SCRIPT_INJECTION.some((pattern) => pattern.test(haystack));
}

export function normalizeField(value: unknown) {
  if (typeof value !== "string") return "";
  return value.replace(/\r\n/g, "\n").trim();
}

export function validateName(value: string) {
  if (value.length < FIELD_LIMITS.name.min) {
    return "Please enter your full name.";
  }
  if (value.length > FIELD_LIMITS.name.max) {
    return "Please enter a shorter name.";
  }
  if (containsScriptInjection(value)) {
    return "Please enter your name without HTML or script content.";
  }
  if (!/^[\p{L}\p{M}][\p{L}\p{M} .'\u2019\-–]*$/u.test(value)) {
    return "Please enter your name using letters only.";
  }
  return undefined;
}

export function validateEmail(value: string) {
  if (
    value.length < FIELD_LIMITS.email.min ||
    value.length > FIELD_LIMITS.email.max
  ) {
    return "Please enter a valid email address.";
  }
  if (containsScriptInjection(value)) {
    return "Please enter a valid email address.";
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    return "Please enter a valid email address.";
  }
  return undefined;
}

export function validateMessage(value: string) {
  if (value.length < FIELD_LIMITS.message.min) {
    return "Please briefly describe your legal concern.";
  }
  if (value.length > FIELD_LIMITS.message.max) {
    return "Please shorten your message so we can review it.";
  }
  if (containsScriptInjection(value)) {
    return "Please remove HTML or script content from your message.";
  }
  return undefined;
}

export function validateInquiry(fields: InquiryFields): InquiryFieldErrors {
  const errors: InquiryFieldErrors = {};
  const name = validateName(fields.name);
  const email = validateEmail(fields.email);
  const message = validateMessage(fields.message);
  if (name) errors.name = name;
  if (email) errors.email = email;
  if (message) errors.message = message;
  return errors;
}
