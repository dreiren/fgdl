import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { ButtonLink, Container } from "@/components/ui";
import { firm, navLinks } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="relative z-40">
      <div className="bg-navy text-[12px] text-white/80">
        <Container className="flex h-9 items-center justify-between gap-4">
          <p className="flex min-w-0 items-center gap-5">
            <a
              href={firm.mapsUrl}
              className="hidden items-center gap-1.5 hover:text-white sm:inline-flex"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              <span className="truncate">
                {firm.address.line1}, {firm.address.short}
              </span>
            </a>
            <a
              href={`tel:${firm.phoneTel}`}
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {firm.phoneDisplay}
            </a>
          </p>
          <a
            href={`mailto:${firm.email}`}
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            <Mail className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {firm.email}
          </a>
        </Container>
      </div>
      <div className="border-b border-navy/5 bg-cream/95 backdrop-blur-md">
        <Container className="flex h-[4.5rem] items-center justify-between gap-6">
          <Link href="/" className="shrink-0" aria-label="FGDLaw home">
            <Logo />
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
          <MobileNav />
        </Container>
      </div>
    </header>
  );
}
