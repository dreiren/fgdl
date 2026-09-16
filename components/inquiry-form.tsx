"use client";

import { useRef, useState, type FormEvent } from "react";
import { cn } from "@/lib/cn";
import {
  INQUIRY_ENDPOINT,
  inquiryDeliveryErrorMessage,
  inquiryDuplicateMessage,
  inquirySuccessMessage,
  markInquirySent,
  wasInquirySentRecently,
  type InquiryResponse,
  type InquiryState,
} from "@/lib/inquiry";
import {
  FIELD_LIMITS,
  validateInquiry,
  type InquiryFieldErrors,
  type InquiryFields,
} from "@/lib/validation";

const initialState: InquiryState = { status: "idle" };

const emptyFields: InquiryFields = {
  name: "",
  email: "",
  message: "",
};

const fieldClass = (invalid: boolean) =>
  cn(
    "mt-2 w-full rounded-md border-0 bg-cream px-3 py-2.5 text-sm text-ink outline-none ring-1 placeholder:text-muted/70 focus:ring-gold",
    invalid ? "ring-red-600 focus:ring-red-600" : "ring-transparent",
  );

export function InquiryForm({ className }: { className?: string }) {
  const [locked, setLocked] = useState(false);
  const lockRef = useRef(false);
  const [state, setState] = useState<InquiryState>(initialState);
  const [values, setValues] = useState<InquiryFields>(emptyFields);
  const [clientErrors, setClientErrors] = useState<InquiryFieldErrors>({});
  const [edited, setEdited] = useState<Partial<Record<keyof InquiryFields, boolean>>>(
    {},
  );

  const submitting = locked;
  const mergedErrors: InquiryFieldErrors = {
    ...(state.status === "error" ? state.fieldErrors : {}),
    ...clientErrors,
  };
  const fieldErrors: InquiryFieldErrors = {
    name: edited.name ? undefined : mergedErrors.name,
    email: edited.email ? undefined : mergedErrors.email,
    message: edited.message ? undefined : mergedErrors.message,
  };

  function updateField(field: keyof InquiryFields, value: string) {
    if (submitting) return;
    setValues((current) => ({ ...current, [field]: value }));
    setEdited((current) => ({ ...current, [field]: true }));
    setClientErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function fail(next: InquiryState) {
    lockRef.current = false;
    setLocked(false);
    setState(next);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting || lockRef.current) return;

    const errors = validateInquiry(values);
    setEdited({});
    setClientErrors(errors);
    if (Object.keys(errors).length > 0) {
      setState({
        status: "error",
        message: "Please correct the highlighted fields.",
        fieldErrors: errors,
      });
      return;
    }

    if (wasInquirySentRecently()) {
      setState({
        status: "error",
        message: inquiryDuplicateMessage,
      });
      return;
    }

    lockRef.current = true;
    setLocked(true);
    setState(initialState);

    try {
      const response = await fetch(INQUIRY_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const payload = (await response.json().catch(() => null)) as InquiryResponse | null;
      if (!payload?.ok) {
        fail({
          status: "error",
          message: payload?.message || inquiryDeliveryErrorMessage,
          fieldErrors: payload?.fieldErrors,
        });
        return;
      }

      markInquirySent();
      setState({
        status: "success",
        message: payload.message || inquirySuccessMessage,
      });
    } catch {
      fail({
        status: "error",
        message: inquiryDeliveryErrorMessage,
      });
    }
  }

  if (state.status === "success") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-navy/8 bg-white p-8 shadow-[0_12px_40px_rgba(8,21,38,0.08)]",
          className,
        )}
        role="status"
      >
        <p className="font-serif text-2xl text-navy">Inquiry received</p>
        <p className="mt-3 text-sm leading-6 text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onReset={(event) => event.preventDefault()}
      aria-busy={submitting}
      className={cn(
        "rounded-2xl border border-navy/8 bg-white p-6 shadow-[0_12px_40px_rgba(8,21,38,0.08)] sm:p-8",
        className,
      )}
    >
      <label className="block text-[11px] font-semibold tracking-[0.14em] text-navy uppercase">
        Full name
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          maxLength={FIELD_LIMITS.name.max}
          placeholder="Juan Dela Cruz"
          value={values.name}
          readOnly={submitting}
          onChange={(event) => updateField("name", event.target.value)}
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? "inquiry-name-error" : undefined}
          className={fieldClass(Boolean(fieldErrors.name))}
        />
      </label>
      {fieldErrors.name ? (
        <p id="inquiry-name-error" className="mt-2 text-sm text-red-700" role="alert">
          {fieldErrors.name}
        </p>
      ) : null}
      <label className="mt-5 block text-[11px] font-semibold tracking-[0.14em] text-navy uppercase">
        Email address
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          maxLength={FIELD_LIMITS.email.max}
          placeholder="juan@email.com"
          value={values.email}
          readOnly={submitting}
          onChange={(event) => updateField("email", event.target.value)}
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? "inquiry-email-error" : undefined}
          className={fieldClass(Boolean(fieldErrors.email))}
        />
      </label>
      {fieldErrors.email ? (
        <p id="inquiry-email-error" className="mt-2 text-sm text-red-700" role="alert">
          {fieldErrors.email}
        </p>
      ) : null}
      <label className="mt-5 block text-[11px] font-semibold tracking-[0.14em] text-navy uppercase">
        Message
        <textarea
          name="message"
          required
          rows={4}
          maxLength={FIELD_LIMITS.message.max}
          placeholder="Tell us about your legal concern..."
          value={values.message}
          readOnly={submitting}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={
            fieldErrors.message ? "inquiry-message-error" : undefined
          }
          className={cn(fieldClass(Boolean(fieldErrors.message)), "resize-y")}
        />
      </label>
      {fieldErrors.message ? (
        <p
          id="inquiry-message-error"
          className="mt-2 text-sm text-red-700"
          role="alert"
        >
          {fieldErrors.message}
        </p>
      ) : null}
      {state.status === "error" &&
      !fieldErrors.name &&
      !fieldErrors.email &&
      !fieldErrors.message ? (
        <p className="mt-4 text-sm text-red-700" role="alert">
          {state.message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={submitting}
        aria-disabled={submitting}
        className="mt-6 w-full rounded-md bg-gold py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-soft disabled:pointer-events-none disabled:opacity-70"
      >
        {submitting ? "Sending…" : "Submit Inquiry"}
      </button>
    </form>
  );
}
