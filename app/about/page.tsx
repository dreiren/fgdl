import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import { firm, firmStats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Law Firm of Frederick G. Dedace has provided just and equitable legal services in the Philippines and abroad since 2002.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Firm"
        title="In the service since 2002"
        description="FGDLaw represents individual and corporate clients in the Philippines and abroad, providing just and equitable legal services with the highest degree of professionalism and integrity."
      />
      <section className="bg-cream py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5 text-[15px] leading-7 text-ink/85">
            <p>
              In {firm.established}, Atty. Frederick G. Dedace formally established
              The Law Firm of Frederick G. Dedace — FGDLaw — in Manila. The
              practice has since grown into a multidisciplinary team with
              courtroom, academic, military, and human-resources experience.
            </p>
            <p>
              The firm&apos;s work spans corporate and labor law, data privacy
              and security, family and special proceedings, litigation and
              criminal law, national security advisory, and retained general
              counsel services. Clients include individuals and corporations
              with matters that sit in the Philippines and, where needed,
              abroad.
            </p>
            <p>
              In 2014 the founder incorporated Fortitude Global Dimensions,
              Inc., a human resources consultancy affiliated with the firm. That
              relationship keeps employment, HR, and compliance counsel close to
              the operating questions companies actually face.
            </p>
            <p>
              Led by a doctorate holder in Peace and Security Administration,
              with a client-first commitment that has not changed since the
              first day of practice.
            </p>
          </div>
          <aside className="h-fit rounded-2xl bg-navy p-8 text-white">
            <p className="font-serif text-2xl">What we stand for</p>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-white/75">
              <li>Just and equitable representation, without theatrics.</li>
              <li>Confidential consultation and discreet handling of sensitive files.</li>
              <li>Counsel that can sit beside HR, operations, and the board.</li>
              <li>A Manila office that remains reachable during business hours.</li>
            </ul>
          </aside>
        </Container>
      </section>
      <section className="bg-navy-deep">
        <Container className="grid grid-cols-2 gap-8 py-16 md:grid-cols-4">
          {firmStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-center font-serif text-4xl text-gold">{stat.value}</p>
              <p className="mt-2 text-center text-[11px] tracking-[0.16em] text-white/55 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
