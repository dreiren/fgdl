"use client";

import { useActionState, useState, type FormEvent } from "react";
import { submitInquiry, type InquiryState } from "@/app/actions/inquiry";
import { cn } from "@/lib/cn";
import {
  FIELD_LIMITS,
  normalizeField,
  validateInquiry,
  type InquiryFieldErrors,
} from "@/lib/validation";

const initialState: InquiryState = { status: "idle" };

const fieldClass = (invalid: boolean) =>
  cn(
    "mt-2 w-full rounded-md border-0 bg-cream px-3 py-2.5 text-sm text-ink outline-none ring-1 placeholder:text-muted/70 focus:ring-gold",
    invalid ? "ring-red-600 focus:ring-red-600" : "ring-transparent",
  );

export function InquiryForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialState,
  );
  const [clientErrors, setClientErrors] = useState<InquiryFieldErrors>({});

  const fieldErrors: InquiryFieldErrors =
    state.status === "error"
      ? { ...clientErrors, ...state.fieldErrors }
      : clientErrors;

  function readFields(form: HTMLFormElement) {
    const data = new FormData(form);
    return {
      name: normalizeField(data.get("name")),
      email: normalizeField(data.get("email")),
      message: normalizeField(data.get("message")),
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const errors = validateInquiry(readFields(event.currentTarget));
    setClientErrors(errors);
    if (Object.keys(errors).length > 0) {
      event.preventDefault();
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
      action={formAction}
      noValidate
      onSubmit={handleSubmit}
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
      {state.status === "error" && !fieldErrors.name && !fieldErrors.email && !fieldErrors.message ? (
        <p className="mt-4 text-sm text-red-700" role="alert">
          {state.message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-6 w-full rounded-md bg-gold py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-soft disabled:opacity-70"
      >
        {pending ? "Sending…" : "Submit Inquiry"}
      </button>
    </form>
  );
}
