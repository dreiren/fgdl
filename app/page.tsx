import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { HeroLogo } from "@/components/hero-logo";
import { InquiryForm } from "@/components/inquiry-form";
import { PracticeIcon } from "@/components/practice-icon";
import { TeamBanner } from "@/components/team-banner";
import { Container, Eyebrow } from "@/components/ui";
import { attorneys, firm, firmStats, practiceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "FGDLaw | Established 2002",
  description: firm.description,
};

export default function Home() {
  return (
    <>
      <HeroLogo />
      <TeamBanner />

      <section className="bg-cream py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Practice Areas</Eyebrow>
            <h2 className="mt-3 font-serif text-4xl text-navy md:text-[2.6rem]">
              Comprehensive legal services, tailored to your needs
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              From corporate governance to labor disputes, our multidisciplinary
              team brings decades of combined military, academic, and courtroom
              experience.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <article
                key={area.slug}
                className="rounded-2xl border border-navy/6 bg-white p-7 shadow-[0_8px_30px_rgba(8,21,38,0.04)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-cream text-navy/70">
                  <PracticeIcon name={area.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-xl text-navy">{area.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{area.summary}</p>
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold hover:text-navy"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy">
        <Container className="grid grid-cols-2 gap-8 py-16 md:grid-cols-4 md:py-20">
          {firmStats.map((stat, index) => (
            <div
              key={stat.label}
              className={index > 0 ? "md:border-l md:border-white/10 md:pl-8" : ""}
            >
              <p className="text-center font-serif text-4xl text-gold md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-center text-[11px] tracking-[0.16em] text-white/55 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Meet the Team</Eyebrow>
            <h2 className="mt-3 font-serif text-4xl text-navy md:text-[2.6rem]">
              Seasoned counsel, distinguished credentials
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              Our attorneys combine legal scholarship with backgrounds in public
              administration, national security, and human resources management.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {attorneys.map((attorney) => (
              <Link
                key={attorney.slug}
                href={`/team/${attorney.slug}`}
                className="overflow-hidden rounded-2xl border border-navy/6 bg-white shadow-[0_8px_30px_rgba(8,21,38,0.04)] transition-transform hover:-translate-y-0.5"
              >
                <div className="grid h-36 place-items-center bg-[#17345a]">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-white/12 text-white/80">
                    <PracticeIcon name="user" className="h-8 w-8" />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-[17px] leading-snug text-navy">
                    {attorney.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-semibold tracking-[0.12em] text-gold uppercase">
                    {attorney.role}
                  </p>
                  <p className="mt-2 text-sm leading-5 text-muted">
                    {attorney.cardSummary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

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
