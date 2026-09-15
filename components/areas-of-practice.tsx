import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { practiceAreas, practiceSection } from "@/lib/site";

function PracticeShell({
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

export function AreasOfPractice({
  headingAs = "h2",
}: {
  headingAs?: "h1" | "h2";
}) {
  const Heading = headingAs;
  const ItemHeading = headingAs === "h1" ? "h2" : "h3";

  return (
    <section className="scroll-mt-24 bg-white" aria-labelledby="practice-heading">
      <PracticeShell className="py-16 md:py-20">
        <Heading
          id="practice-heading"
          className="scroll-mt-28 text-center font-serif text-[2rem] leading-tight tracking-[0.08em] text-navy uppercase md:text-[2.85rem]"
        >
          {practiceSection.title}
        </Heading>
        <div className="mx-auto mt-3.5 h-[2px] w-12 bg-gold" aria-hidden="true" />
        <p className="mt-5 text-center text-[11px] font-semibold tracking-[0.28em] text-[#6a7380] uppercase">
          {practiceSection.kicker}
        </p>
        <p className="mx-auto mt-3 max-w-[40rem] text-center text-[15px] leading-7 text-muted">
          {practiceSection.intro}
        </p>

        <ul className="mt-12 grid gap-x-10 gap-y-9 sm:gap-y-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
          {practiceAreas.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/practice-areas/${area.slug}`}
                className="-m-1.5 flex items-start gap-4 rounded-sm p-1.5 transition-colors hover:bg-[#fafafa] sm:gap-5 lg:gap-6"
              >
                <div className="relative aspect-[11/10] w-[8.35rem] shrink-0 overflow-hidden rounded-[4px] shadow-[0_8px_20px_rgba(8,21,38,0.08)] sm:w-[11rem] lg:w-[13.25rem] xl:w-[14.75rem]">
                  <Image
                    src={area.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 134px, (max-width: 1024px) 176px, 236px"
                    quality={90}
                    unoptimized
                  />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <ItemHeading className="flex gap-3 font-serif text-[1.05rem] leading-snug tracking-[0.07em] text-navy uppercase sm:text-[1.16rem] lg:text-[1.2rem]">
                    <span
                      className="mt-[0.38em] mb-[0.12em] w-[3px] shrink-0 self-stretch bg-gold"
                      aria-hidden="true"
                    />
                    <span>{area.title}</span>
                  </ItemHeading>
                  {area.topics.length > 0 ? (
                    <p className="mt-2 pl-6 text-[11.5px] leading-5 text-gold sm:text-[12.5px]">
                      {area.topics.map((topic, index) => (
                        <span key={topic}>
                          {index > 0 ? (
                            <span aria-hidden="true"> • </span>
                          ) : null}
                          {topic}
                        </span>
                      ))}
                    </p>
                  ) : null}
                  <p className="mt-2 pl-6 text-[13px] leading-[1.65] text-[#6a7380] sm:text-[13.5px]">
                    {area.summary}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </PracticeShell>

      <div className="bg-navy-deep">
        <PracticeShell className="flex flex-col items-center py-8 text-center md:py-9">
          <div className="flex w-full max-w-xl items-center gap-4">
            <span className="h-px flex-1 bg-gold/80" aria-hidden="true" />
            <p className="shrink-0 font-serif text-[0.92rem] tracking-[0.22em] text-white uppercase md:text-[1.05rem]">
              Law <span className="mx-1 text-gold">•</span> People{" "}
              <span className="mx-1 text-gold">•</span> Progress
            </p>
            <span className="h-px flex-1 bg-gold/80" aria-hidden="true" />
          </div>
          <p className="mt-3 text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
            {practiceSection.footerTag}
          </p>
        </PracticeShell>
      </div>
    </section>
  );
}
