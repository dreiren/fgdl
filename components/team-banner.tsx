import Image from "next/image";

export function TeamBanner() {
  return (
    <section
      className="relative h-dvh w-full overflow-hidden"
      aria-label="FGDLaw team"
    >
      <Image
        src="/fgdlaw-team.jpg"
        alt="FGDLaw counsel in the Manila office"
        fill
        sizes="100vw"
        className="object-cover object-top"
        style={{ top: 0 }}
      />
    </section>
  );
}
