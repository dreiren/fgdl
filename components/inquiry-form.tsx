"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/app/actions/inquiry";
import { cn } from "@/lib/cn";

const initialState: InquiryState = { status: "idle" };

export function InquiryForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialState,
  );

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
          placeholder="Juan Dela Cruz"
          className="mt-2 w-full rounded-md border-0 bg-cream px-3 py-2.5 text-sm text-ink outline-none ring-1 ring-transparent placeholder:text-muted/70 focus:ring-gold"
        />
      </label>
      <label className="mt-5 block text-[11px] font-semibold tracking-[0.14em] text-navy uppercase">
        Email address
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="juan@email.com"
          className="mt-2 w-full rounded-md border-0 bg-cream px-3 py-2.5 text-sm text-ink outline-none ring-1 ring-transparent placeholder:text-muted/70 focus:ring-gold"
        />
      </label>
      <label className="mt-5 block text-[11px] font-semibold tracking-[0.14em] text-navy uppercase">
        Message
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us about your legal concern..."
          className="mt-2 w-full resize-y rounded-md border-0 bg-cream px-3 py-2.5 text-sm text-ink outline-none ring-1 ring-transparent placeholder:text-muted/70 focus:ring-gold"
        />
      </label>
      {state.status === "error" ? (
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
