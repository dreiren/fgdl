import type { Metadata } from "next";
import Link from "next/link";
import { SiteImage } from "@/components/site-image";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { ButtonLink, Container } from "@/components/ui";
import { getPracticeArea, practiceAreas } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/practice-areas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.summary,
  };
}

export default async function PracticeAreaPage({
  params,
}: PageProps<"/practice-areas/[slug]">) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  return (
    <>
      <PageHero eyebrow="Practice Area" title={area.title} description={area.summary} />
      <section className="bg-cream py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="relative mb-8 aspect-[4/3] max-w-md overflow-hidden rounded-[4px] shadow-[0_8px_24px_rgba(8,21,38,0.08)]">
              <SiteImage
                src={area.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
                quality={90}
              />
            </div>
            {area.topics.length > 0 ? (
              <p className="text-sm text-gold">
                {area.topics.map((topic, index) => (
                  <span key={topic}>
                    {index > 0 ? <span aria-hidden="true"> • </span> : null}
                    {topic}
                  </span>
                ))}
              </p>
            ) : null}
            <ul className="mt-6 space-y-4 text-[15px] leading-7 text-ink/85">
              {area.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ButtonLink href="/contact" className="mt-10">
              Schedule a Consultation
            </ButtonLink>
          </div>
          <aside className="h-fit rounded-2xl border border-navy/8 bg-white p-7">
            <p className="font-serif text-xl text-navy">Related practices</p>
            <ul className="mt-4 space-y-3 text-sm">
              {practiceAreas
                .filter((item) => item.slug !== area.slug)
                .slice(0, 4)
                .map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/practice-areas/${item.slug}`}
                      className="text-muted hover:text-navy"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </aside>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
