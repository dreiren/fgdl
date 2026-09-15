import Link from "next/link";
import { Container } from "@/components/ui";
import { lawyersRoster } from "@/lib/site";

export function LawyersRoster() {
  return (
    <section className="bg-white" aria-labelledby="lawyers-heading">
      <Container className="py-16 md:py-20">
        <p className="text-center text-[11px] font-semibold tracking-[0.28em] uppercase">
          <span className="text-navy">People</span>
          <span className="mx-2 text-gold">•</span>
          <span className="text-navy">Ideas</span>
          <span className="mx-2 text-gold">•</span>
          <span className="text-navy">Solutions</span>
          <span className="mx-2.5 text-navy/25">•</span>
          <span className="text-gold">A Brighter Tomorrow</span>
        </p>
        <h2
          id="lawyers-heading"
          className="mt-4 text-center font-serif text-[2rem] leading-tight tracking-[0.04em] text-navy md:text-[2.75rem]"
        >
          The Lawyers of FGDLaw
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {lawyersRoster.map((lawyer) => (
            <article
              key={lawyer.slug}
              className="flex h-full flex-col border-t-[3px] border-gold bg-white px-5 pb-6 pt-6 shadow-[0_10px_30px_rgba(8,21,38,0.05)]"
            >
              <h3 className="min-h-[4.8rem] text-center font-serif text-[1.32rem] leading-[1.25] text-navy">
                <Link
                  href={`/team/${lawyer.slug}`}
                  className="transition-colors hover:text-gold"
                >
                  {lawyer.name}
                </Link>
              </h3>
              <p className="mt-3 text-center text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
                {lawyer.title}
              </p>
              <div className="mt-5 flex flex-1 flex-col bg-[#f4f5f7] px-4 py-5">
                <p className="text-center text-[10px] font-semibold tracking-[0.2em] text-[#c4a35a] uppercase">
                  Areas of Focus
                </p>
                <p className="mt-3 text-center text-[13px] leading-[1.7] text-[#5a6573]">
                  {lawyer.focusAreas.map((area, index) => (
                    <span key={area}>
                      {index > 0 ? (
                        <span className="text-gold" aria-hidden="true">
                          {" "}
                          •{" "}
                        </span>
                      ) : null}
                      {area}
                    </span>
                  ))}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <div className="bg-navy-deep">
        <Container className="grid gap-8 py-8 text-center md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 md:py-9 md:text-left">
          <p className="text-[11px] leading-5 font-semibold tracking-[0.18em] text-[#d4b45c] uppercase md:max-w-[9.5rem]">
            Trusted
            <br />
            Legal Partner
          </p>
          <div className="flex flex-col items-center">
            <div className="flex w-full max-w-md items-center gap-4">
              <span className="h-px flex-1 bg-gold/80" aria-hidden="true" />
              <p className="font-serif text-[1.65rem] tracking-[0.08em] text-white">
                FGDLaw
              </p>
              <span className="h-px flex-1 bg-gold/80" aria-hidden="true" />
            </div>
            <p className="mt-2 text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
              Law <span className="mx-1">•</span> People{" "}
              <span className="mx-1">•</span> Progress
            </p>
            <p className="mt-1 text-[10px] tracking-[0.2em] text-white/70 uppercase">
              A More Secure Tomorrow
            </p>
          </div>
          <p className="text-[11px] leading-5 font-semibold tracking-[0.18em] text-[#d4b45c] uppercase md:justify-self-end md:text-right md:max-w-[11rem]">
            Greater
            <br />
            Possibilities Together
          </p>
        </Container>
      </div>
    </section>
  );
}
