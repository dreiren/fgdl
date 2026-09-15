import type { Metadata } from "next";
import Link from "next/link";
import { AttorneyPhoto } from "@/components/attorney-photo";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import {
  attorneys,
  supportAssociates,
  supportManager,
  supportTeam,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet FGDLaw counsel and the professional legal support team that keeps the firm’s practice organized, confidential, and responsive.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet the Team"
        title="Seasoned counsel, distinguished credentials"
        description="Our attorneys combine legal scholarship with backgrounds in public administration, national security, human resources, litigation, and special proceedings."
      />
      <section className="bg-cream py-16 md:py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          {attorneys.map((attorney) => (
            <Link
              key={attorney.slug}
              href={`/team/${attorney.slug}`}
              className="overflow-hidden rounded-2xl border border-navy/6 bg-white shadow-[0_8px_30px_rgba(8,21,38,0.04)] transition-transform hover:-translate-y-0.5"
            >
              <AttorneyPhoto
                src={attorney.image}
                name={attorney.name}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="aspect-[4/5]"
              />
              <div className="p-6">
                <h2 className="font-serif text-2xl text-navy">{attorney.name}</h2>
                <p className="mt-1 text-[11px] font-semibold tracking-[0.12em] text-gold uppercase">
                  {attorney.role}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">{attorney.tagline}</p>
                <p className="mt-3 text-sm leading-6 text-ink/80">{attorney.intro[0]}</p>
              </div>
            </Link>
          ))}
        </Container>
      </section>

      <section
        className="scroll-mt-24 bg-white py-16 md:py-20"
        aria-labelledby="support-team-heading"
      >
        <Container>
          <article className="mx-auto max-w-xl border-t-[3px] border-gold bg-cream px-6 py-8 text-center shadow-[0_8px_24px_rgba(8,21,38,0.04)]">
            <h2 className="font-serif text-2xl text-navy md:text-[1.85rem]">
              {supportManager.name}
            </h2>
            <p className="mt-3 text-[11px] font-semibold tracking-[0.18em] text-gold uppercase">
              {supportManager.role}
            </p>
          </article>

          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {supportAssociates.map((person) => (
              <article
                key={person.name}
                className="border-t-[3px] border-gold bg-cream px-5 py-7 text-center shadow-[0_8px_24px_rgba(8,21,38,0.04)]"
              >
                <h3 className="font-serif text-xl tracking-[0.04em] text-navy uppercase md:text-[1.35rem]">
                  {person.name}
                </h3>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            <h2
              id="support-team-heading"
              className="text-center font-serif text-[1.85rem] leading-tight text-navy md:text-[2.15rem]"
            >
              {supportTeam.title}
            </h2>
            <div className="mx-auto mt-3 h-[2px] w-12 bg-gold" aria-hidden="true" />
            <div className="mt-8 space-y-5 text-[15px] leading-7 text-ink/85">
              {supportTeam.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
