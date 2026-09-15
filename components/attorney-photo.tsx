import Image from "next/image";
import { cn } from "@/lib/cn";

export function AttorneyPhoto({
  src,
  name,
  sizes,
  className,
  imageClassName,
  priority = false,
}: {
  src: string;
  name: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-[#17345a]", className)}>
      <Image
        src={src}
        alt={name}
        fill
        className={cn("object-cover object-[center_18%]", imageClassName)}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
