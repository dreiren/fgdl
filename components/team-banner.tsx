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

    let frame = 0;
    let current = 0;
    let target = 0;
    let running = true;

    const readScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const maxShift = Math.min(220, vh * 0.28);
      target = Math.max(-maxShift, Math.min(maxShift, -rect.top * 0.42));
    };

    const tick = () => {
      if (!running) return;
      current += (target - current) * 0.08;
      if (Math.abs(target - current) < 0.04) current = target;
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
      className="relative h-screen min-h-[100dvh] w-full bg-[#e6e2dc]"
      aria-label="FGDLaw team"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={layerRef}
          className="absolute inset-x-0 top-0 h-[calc(100%+16rem)] will-change-transform"
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
      </div>
    </section>
  );
}
