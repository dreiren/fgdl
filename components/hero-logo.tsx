"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { firm } from "@/lib/site";

export function HeroLogo() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let current = 0;
    let target = 0;
    let running = true;

    const maxShift = 120;
    const factor = 0.28;
    const follow = 0.06;

    const readScroll = () => {
      const distance = Math.max(0, window.scrollY);
      const linear = Math.min(distance * factor, maxShift);
      const t = linear / maxShift;
      const eased = 1 - (1 - t) * (1 - t);
      target = -eased * maxShift;
    };

    const tick = () => {
      if (!running) return;
      current += (target - current) * follow;
      if (Math.abs(target - current) < 0.04) current = target;
      layer.style.transform = `translate3d(0, ${current}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    readScroll();
    window.addEventListener("scroll", readScroll, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", readScroll);
    };
  }, []);

  return (
    <section className="relative z-0 overflow-hidden bg-logo" aria-labelledby="hero-heading">
      <h1 id="hero-heading" className="sr-only">
        {firm.name}. Established {firm.established}. Strategic Lawyering. Dynamic
        Solutions. Enduring Impact.
      </h1>
      <div ref={layerRef} className="will-change-transform">
        <Image
          src="/fgdlaw-logo.png"
          alt=""
          width={1920}
          height={1080}
          priority
          className="mx-auto h-auto w-full"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
