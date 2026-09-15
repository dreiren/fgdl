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
      <span
        className={cn(
          "grid h-11 w-11 place-items-center rounded-lg bg-navy text-[15px] font-semibold tracking-wide text-gold",
          markClassName,
        )}
        aria-hidden="true"
      >
        FG
      </span>
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
