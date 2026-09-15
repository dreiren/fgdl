import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { PracticeIcon } from "@/components/practice-icon";
import { Container } from "@/components/ui";
import { practiceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Corporate and labor law, data privacy, family and special proceedings, litigation, national security advisory, and general counsel services.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Practice Areas"
        title="Comprehensive legal services, tailored to your needs"
        description="From corporate governance to labor disputes, our multidisciplinary team brings decades of combined military, academic, and courtroom experience."
      />
      <section className="bg-cream py-16 md:py-20">
        <Container className="grid gap-5 sm:grid-cols-2">
          {practiceAreas.map((area) => (
            <article
              key={area.slug}
              className="rounded-2xl border border-navy/6 bg-white p-8 shadow-[0_8px_30px_rgba(8,21,38,0.04)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-cream text-navy/70">
                <PracticeIcon name={area.icon} className="h-5 w-5" />
              </span>
              <p className="mt-5 text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">
                {area.eyebrow}
              </p>
              <h2 className="mt-2 font-serif text-2xl text-navy">{area.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{area.summary}</p>
              <Link
                href={`/practice-areas/${area.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold hover:text-navy"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
