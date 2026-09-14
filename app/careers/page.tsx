import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { ButtonLink, Container } from "@/components/ui";
import { firm } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "FGDLaw considers counsel and administrative applications for its Manila practice.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join a practice built on integrity"
        description="The firm periodically considers applications from lawyers and administrative professionals who want to do careful, client-first work in Manila."
      />
      <section className="bg-cream py-16 md:py-20">
        <Container className="max-w-3xl space-y-5 text-[15px] leading-7 text-ink/85">
          <p>
            FGDLaw is a compact Manila practice. Openings are not posted on a
            rolling basis. When the firm is able to take on additional counsel
            or administrative support, applications are reviewed for fit with
            the work we actually do: labor and corporate counsel, privacy,
            litigation, special proceedings, and retained general-counsel
            support.
          </p>
          <p>
            If you would like to be considered, send a curriculum vitae and a
            short note on the kind of work you want to do to{" "}
            <a className="text-gold hover:text-navy" href={`mailto:${firm.email}`}>
              {firm.email}
            </a>
            . Please do not send confidential client materials with an
            unsolicited application.
          </p>
          <ButtonLink href="/contact">Contact the office</ButtonLink>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
