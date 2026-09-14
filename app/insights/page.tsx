import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import { insights } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives from FGDLaw on labor compliance, data privacy, and special proceedings in the Philippines.",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-PH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes from practice"
        description="Short, general-information pieces on the kinds of matters FGDLaw handles. They are not legal advice and do not create a lawyer-client relationship."
      />
      <section className="bg-cream py-16 md:py-20">
        <Container className="grid gap-5">
          {insights.map((insight) => (
            <article
              key={insight.slug}
              className="rounded-2xl border border-navy/6 bg-white p-8 shadow-[0_8px_30px_rgba(8,21,38,0.04)]"
            >
              <p className="text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">
                {insight.category} · {formatDate(insight.date)}
              </p>
              <h2 className="mt-3 font-serif text-2xl text-navy md:text-3xl">
                <Link href={`/insights/${insight.slug}`} className="hover:text-gold">
                  {insight.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
                {insight.excerpt}
              </p>
              <Link
                href={`/insights/${insight.slug}`}
                className="mt-5 inline-block text-sm font-medium text-gold hover:text-navy"
              >
                Read article
              </Link>
            </article>
          ))}
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
