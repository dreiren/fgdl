import Link from "next/link";
import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold tracking-[0.22em] text-gold uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "gold",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "outline-light" | "outline-dark";
  className?: string;
}) {
  const variants = {
    gold: "bg-gold text-navy-deep hover:bg-gold-soft",
    "outline-light":
      "border border-white/35 bg-transparent text-white hover:bg-white/8",
    "outline-dark":
      "border border-navy/15 bg-transparent text-navy hover:bg-navy/5",
  };

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
