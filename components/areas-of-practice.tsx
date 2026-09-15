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
          className="scroll-mt-28 text-center font-serif text-[2rem] leading-tight tracking-[0.08em] text-navy uppercase md:text-[2.75rem]"
        >
          {practiceSection.title}
        </Heading>
        <div className="mx-auto mt-4 h-px w-14 bg-gold" aria-hidden="true" />
        <p className="mt-5 text-center text-[11px] font-semibold tracking-[0.28em] text-[#6a7380] uppercase">
          {practiceSection.kicker}
        </p>
        <p className="mx-auto mt-3 max-w-[38rem] text-center text-[15px] leading-7 text-muted">
          {practiceSection.intro}
        </p>

        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-14">
          {practiceAreas.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/practice-areas/${area.slug}`}
                className="-m-2 flex gap-4 rounded-sm p-2 transition-colors hover:bg-[#fafafa] sm:gap-5"
              >
                <div className="relative h-[7.35rem] w-[8.15rem] shrink-0 overflow-hidden rounded-[3px] sm:h-[8.6rem] sm:w-[9.6rem] lg:h-[9.15rem] lg:w-[10.35rem]">
                  <Image
                    src={area.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="166px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <ItemHeading className="flex gap-3 font-serif text-[1.02rem] leading-snug tracking-[0.06em] text-navy uppercase sm:text-[1.12rem]">
                    <span
                      className="mt-[0.38em] mb-[0.12em] w-[3px] shrink-0 self-stretch bg-gold"
                      aria-hidden="true"
                    />
                    <span>{area.title}</span>
                  </ItemHeading>
                  {area.topics.length > 0 ? (
                    <p className="mt-2 pl-6 text-[12px] leading-5 text-gold">
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
                  <p className="mt-2 pl-6 text-[13.5px] leading-[1.65] text-[#6a7380]">
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
            <p className="font-serif text-[0.95rem] tracking-[0.22em] text-white uppercase md:text-[1.05rem]">
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
