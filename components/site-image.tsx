import Image, { type ImageProps } from "next/image";

type SiteImageProps = Omit<ImageProps, "unoptimized" | "loading">;

export function SiteImage({
  alt,
  priority = false,
  decoding = "async",
  ...props
}: SiteImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      unoptimized
      decoding={decoding}
      {...(priority
        ? { priority: true }
        : { loading: "lazy", fetchPriority: "low" })}
    />
  );
}
