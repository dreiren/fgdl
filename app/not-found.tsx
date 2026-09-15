import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-cream py-24">
      <Container className="max-w-xl text-center">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
          404
        </p>
        <h1 className="mt-3 font-serif text-4xl text-navy">Page not found</h1>
        <p className="mt-4 text-sm leading-6 text-muted">
          The page you requested is not part of the FGDLaw site. Return home or
          contact the Manila office if you were looking for a specific matter.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="outline-dark">
            Contact
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
