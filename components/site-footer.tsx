import Link from "next/link";
import { Container } from "@/components/ui";
import { firm } from "@/lib/site";

const firmLinks = [
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/careers", label: "Careers" },
] as const;

const practiceLinks = [
  { href: "/practice-areas/corporate-labor", label: "Corporate & Labor" },
  { href: "/practice-areas/data-privacy", label: "Data Privacy" },
  { href: "/practice-areas/litigation-criminal", label: "Litigation" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl">FGDLaw</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">
            Established {firm.established}. Providing just and equitable legal
            services in the Philippines and abroad.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Firm</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            {firmLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Practice Areas</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            {practiceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            <li>
              <a href={`mailto:${firm.email}`} className="hover:text-white">
                {firm.email}
              </a>
            </li>
            <li>
              <a href={`tel:${firm.phoneTel}`} className="hover:text-white">
                {firm.phoneDisplay}
              </a>
            </li>
            <li>{firm.address.short}</li>
          </ul>
        </div>
      </Container>
      <Container>
        <div className="border-t border-white/10 py-6 text-xs text-white/40">
          © 2026 The Law Firm of Frederick G. Dedace. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
