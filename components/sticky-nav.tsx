"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ButtonLink, Container } from "@/components/ui";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/site";

export function StickyNav() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={cn(
        "border-b border-navy/5 bg-cream backdrop-blur-md transition-shadow",
        stuck && "shadow-[0_8px_24px_rgba(8,21,38,0.08)]",
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label="FGDLaw home">
          <Logo showWordmark={false} />
        </Link>
        <nav
          className="hidden items-center gap-8 text-[15px] text-navy lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="/contact">Book a Consultation</ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy hover:bg-navy/5 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>
      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-navy/5 bg-cream px-5 py-6 lg:hidden"
        >
          <nav className="mx-auto flex max-w-[1120px] flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-medium text-navy hover:bg-navy/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mx-auto mt-6 max-w-[1120px]">
            <ButtonLink href="/contact" className="w-full">
              Book a Consultation
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}
