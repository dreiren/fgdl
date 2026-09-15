import type { Metadata } from "next";
import Link from "next/link";
import { AttorneyPhoto } from "@/components/attorney-photo";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import { attorneys } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet FGDLaw counsel — lawyers, educators, and practitioners in labor, corporate law, special proceedings, litigation, and data privacy.",
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
      <CtaBanner />
    </>
  );
}
