import Image from "next/image";

export function TeamBanner() {
  return (
    <section
      className="relative h-screen min-h-[100dvh] w-full overflow-hidden"
      aria-label="FGDLaw team"
    >
      <div className="absolute inset-x-0 bottom-0 top-0">
        <Image
          src="/fgdlaw-team.jpg"
          alt="FGDLaw counsel in the Manila office"
          fill
          sizes="100vw"
          className="object-cover object-top"
          style={{ top: 0, objectPosition: "top" }}
        />
      </div>
    </section>
  );
}
