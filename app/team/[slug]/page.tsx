import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { PracticeIcon } from "@/components/practice-icon";
import { Container } from "@/components/ui";
import { attorneys, getAttorney } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return attorneys.map((attorney) => ({ slug: attorney.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/team/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const attorney = getAttorney(slug);
  if (!attorney) return {};
  return {
    title: attorney.name,
    description: `${attorney.role} at FGDLaw. ${attorney.tagline}`,
  };
}

export default async function AttorneyPage({
  params,
}: PageProps<"/team/[slug]">) {
  const { slug } = await params;
  const attorney = getAttorney(slug);
  if (!attorney) notFound();

  return (
    <>
      <PageHero
        eyebrow={attorney.role}
        title={attorney.name}
        description={attorney.tagline}
      />
      <section className="bg-cream py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
          <div className="h-fit overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(8,21,38,0.04)]">
            <div className="grid h-56 place-items-center bg-[#17345a]">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-white/12 text-white/80">
                <PracticeIcon name="user" className="h-10 w-10" />
              </span>
            </div>
            <div className="p-6">
              <p className="font-serif text-xl text-navy">{attorney.name}</p>
              <p className="mt-1 text-[11px] font-semibold tracking-[0.12em] text-gold uppercase">
                {attorney.role}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">{attorney.tagline}</p>
              <Link href="/team" className="mt-4 inline-block text-sm text-gold hover:text-navy">
                All counsel
              </Link>
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-5 text-[15px] leading-7 text-ink/85">
              {attorney.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {attorney.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-2xl text-navy">{section.title}</h2>
                <div className="mt-4 space-y-4 text-[15px] leading-7 text-ink/85">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
