"use client";

import { useEffect, useRef } from "react";
import { SiteImage } from "@/components/site-image";
import { firm } from "@/lib/site";

export function HeroLogo() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (CSS.supports("animation-timeline: scroll()")) return;

    let frame = 0;
    let current = 0;
    let target = 0;
    let running = true;

    const readScroll = () => {
      const maxShift = Math.min(120, window.innerHeight * 0.16);
      const distance = Math.max(0, window.scrollY);
      const linear = Math.min(distance * 0.2, maxShift);
      const t = maxShift === 0 ? 0 : linear / maxShift;
      const eased = 1 - (1 - t) * (1 - t);
      target = -eased * maxShift;
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
      className="relative z-0 overflow-hidden bg-logo"
      aria-labelledby="hero-heading"
    >
      <h1 id="hero-heading" className="sr-only">
        {firm.name}. Established {firm.established}. Strategic Lawyering. Dynamic
        Solutions. Enduring Impact.
      </h1>
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <div
          ref={layerRef}
          className="hero-parallax-layer absolute inset-x-0 -top-[8%] h-[116%] will-change-transform"
        >
          <SiteImage
            src="/fgdlaw-logo.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
}
