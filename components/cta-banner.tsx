import { ArrowRight } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";

export function CtaBanner() {
  return (
    <section className="bg-navy">
      <Container className="flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
        <div>
          <h2 className="font-serif text-3xl text-white md:text-[2.1rem]">
            Need trusted legal representation?
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Schedule a confidential consultation with our team today.
          </p>
        </div>
        <ButtonLink href="/contact">
          Contact Our Office
          <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </Container>
    </section>
  );
}
