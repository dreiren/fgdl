import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { lawyersRoster } from "@/lib/site";

function RosterShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1320px] px-5 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  );
}

export function LawyersRoster() {
  return (
    <section
      className="scroll-mt-24 bg-white"
      aria-labelledby="lawyers-heading"
    >
      <RosterShell className="py-16 md:py-20">
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
          className="mt-4 scroll-mt-28 text-center font-serif text-[2rem] leading-tight tracking-[0.04em] text-navy md:text-[2.85rem]"
        >
          The Lawyers of FGDLaw
        </h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {lawyersRoster.map((lawyer) => (
            <article
              key={lawyer.slug}
              className="border-t-[3px] border-gold bg-white shadow-[0_8px_24px_rgba(8,21,38,0.045)]"
            >
              <Link
                href={`/team/${lawyer.slug}`}
                className="flex h-full flex-col transition-colors hover:bg-[#fafafa]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#17345a]">
                  <Image
                    src={lawyer.image}
                    alt={lawyer.name}
                    fill
                    className="object-cover object-[center_18%]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={90}
                    unoptimized
                  />
                </div>
                <div className="flex flex-1 flex-col px-4 pb-5 pt-5">
                  <h3 className="min-h-[4.4rem] text-center font-serif text-[1.28rem] leading-snug text-balance text-navy">
                    {lawyer.name}
                  </h3>
                  <p className="mt-3 text-center text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
                    {lawyer.title}
                  </p>
                  <p className="mt-3 min-h-[3.6rem] text-center text-[12px] leading-5 text-[#5a6573]">
                    {lawyer.tagline}
                  </p>
                  <div className="mt-5 flex flex-1 flex-col justify-start bg-[#f3f4f6] px-3.5 py-5">
                    <p className="text-center text-[10px] font-semibold tracking-[0.2em] text-[#c4a35a] uppercase">
                      Areas of Focus
                    </p>
                    <p className="mt-3 text-center text-[13px] leading-[1.75] text-[#5a6573]">
                      {lawyer.focusAreas.map((area, index) => (
                        <span key={area}>
                          {index > 0 ? (
                            <span className="text-gold" aria-hidden="true">
                              {" "}
                              •{" "}
                            </span>
                          ) : null}
                          <span className="whitespace-nowrap">{area}</span>
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </RosterShell>

      <div className="bg-navy-deep">
        <RosterShell className="grid gap-8 py-8 text-center md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 md:py-9 md:text-left">
          <p className="text-[11px] leading-5 font-semibold tracking-[0.18em] text-[#d4b45c] uppercase md:max-w-[9.5rem]">
            Trusted
            <br />
            Legal Partner
          </p>
          <div className="flex flex-col items-center">
            <div className="flex w-full max-w-lg items-center gap-4">
              <span className="h-px flex-1 bg-gold/80" aria-hidden="true" />
              <p className="font-serif text-[1.7rem] tracking-[0.08em] text-white">
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
          <p className="text-[11px] leading-5 font-semibold tracking-[0.18em] text-[#d4b45c] uppercase md:justify-self-end md:max-w-[11rem] md:text-right">
            Greater
            <br />
            Possibilities Together
          </p>
        </RosterShell>
      </div>
    </section>
  );
}
