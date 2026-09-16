import { SiteImage } from "@/components/site-image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  markClassName,
  showWordmark = true,
}: {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <SiteImage
        src="/fgdlaw-crest.png"
        alt=""
        width={479}
        height={552}
        priority
        className={cn("h-14 w-auto", markClassName)}
      />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span className="font-serif text-[1.35rem] text-navy">
            FGD<span className="font-semibold">Law</span>
          </span>
          <span className="mt-1 text-[10px] font-medium tracking-[0.16em] text-muted uppercase">
            Est. 2002 · Manila, PH
          </span>
        </span>
      ) : null}
    </span>
  );
}
