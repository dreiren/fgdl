"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function TeamBanner() {
  const layerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const section = sectionRef.current;
    if (!layer || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (CSS.supports("animation-timeline: view()")) return;

    let frame = 0;
    let current = 0;
    let target = 0;
    let running = true;

    const readScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const maxShift = Math.min(128, vh * 0.18);
      const start = vh;
      const end = -rect.height;
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end)),
      );
      target = -maxShift + progress * maxShift * 2;
    };

    const tick = () => {
      if (!running) return;
      current += (target - current) * 0.06;
      if (Math.abs(target - current) < 0.05) current = target;
      layer.style.transform = `translate3d(0, ${current}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    readScroll();
    window.addEventListener("scroll", readScroll, { passive: true });
    window.addEventListener("resize", readScroll);
    frame = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", readScroll);
      window.removeEventListener("resize", readScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[100dvh] w-full overflow-hidden bg-[#e6e2dc]"
      aria-label="FGDLaw team"
    >
      <div
        ref={layerRef}
        className="team-parallax-layer absolute inset-x-0 top-0 h-[calc(100%+10rem)] will-change-transform"
        style={{ top: 0 }}
      >
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
