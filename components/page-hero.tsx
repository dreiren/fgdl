import { Container, Eyebrow } from "@/components/ui";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-navy-deep">
      <Container className="max-w-3xl py-16 md:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">{title}</h1>
        <p className="mt-4 text-base leading-7 text-white/70">{description}</p>
      </Container>
    </section>
  );
}
