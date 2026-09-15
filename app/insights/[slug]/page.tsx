import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import { getInsight, insights } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.excerpt,
  };
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-PH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

export default async function InsightPage({
  params,
}: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${insight.category} · ${formatDate(insight.date)}`}
        title={insight.title}
        description={insight.excerpt}
      />
      <article className="bg-cream py-16 md:py-20">
        <Container className="max-w-3xl space-y-5 text-[16px] leading-8 text-ink/90">
          {insight.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="pt-4 text-sm text-muted">
            <Link href="/insights" className="text-gold hover:text-navy">
              All insights
            </Link>
          </p>
        </Container>
      </article>
      <CtaBanner />
    </>
  );
}
