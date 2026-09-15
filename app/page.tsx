import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { AreasOfPractice } from "@/components/areas-of-practice";
import { CtaBanner } from "@/components/cta-banner";
import { HeroLogo } from "@/components/hero-logo";
import { InquiryForm } from "@/components/inquiry-form";
import { PracticeIcon } from "@/components/practice-icon";
import { LawyersRoster } from "@/components/lawyers-roster";
import { TeamBanner } from "@/components/team-banner";
import { Container, Eyebrow } from "@/components/ui";
import { attorneys, firm, firmStats } from "@/lib/site";

export const metadata: Metadata = {
  title: "FGDLaw | Established 2002",
  description: firm.description,
};

export default function Home() {
  return (
    <>
      <HeroLogo />
      <TeamBanner />
      <LawyersRoster />
      <AreasOfPractice />

      

      <section className="bg-quote py-20 text-center">
        <Container className="max-w-3xl">
          <p className="font-serif text-5xl leading-none text-gold" aria-hidden="true">
            “
          </p>
          <blockquote className="mt-4 font-serif text-2xl leading-snug text-navy md:text-[2rem]">
            “Providing just and equitable legal services with the highest degree
            of professionalism and integrity — that has been our commitment
            since day one.”
          </blockquote>
          <footer className="mt-6 text-sm">
            <p className="font-semibold text-navy">Atty. Frederick G. Dedace, PhD</p>
            <p className="text-muted">Founder, FGDLaw</p>
          </footer>
        </Container>
      </section>

      <CtaBanner />

      <section className="bg-cream py-20 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Contact Us</Eyebrow>
            <h2 className="mt-3 font-serif text-4xl text-navy">
              Let&apos;s discuss your legal matter
            </h2>
          </div>
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <ul className="space-y-6">
              <ContactItem
                icon={MapPin}
                title="Office Address"
                body={firm.address.full}
                href={firm.mapsUrl}
              />
              <ContactItem
                icon={Phone}
                title="Phone"
                body={firm.phoneDisplay}
                href={`tel:${firm.phoneTel}`}
              />
              <ContactItem
                icon={Mail}
                title="Email"
                body={firm.email}
                href={`mailto:${firm.email}`}
              />
              <ContactItem icon={Clock} title="Office Hours" body={firm.hours} />
            </ul>
            <InquiryForm />
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  title,
  body,
  href,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  href?: string;
}) {
  const content = href ? (
    <a
      href={href}
      className="hover:text-navy"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {body}
    </a>
  ) : (
    body
  );

  return (
    <li className="flex gap-4">
      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-navy/55 shadow-sm">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-semibold text-navy">{title}</p>
        <p className="mt-1 text-sm leading-6 text-muted">{content}</p>
      </div>
    </li>
  );
}
