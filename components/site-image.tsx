import Image, { type ImageProps } from "next/image";

type SiteImageProps = Omit<ImageProps, "unoptimized" | "loading">;

export function SiteImage({
  priority = false,
  decoding = "async",
  ...props
}: SiteImageProps) {
  return (
    <Image
      {...props}
      unoptimized
      decoding={decoding}
      {...(priority
        ? { priority: true }
        : { loading: "lazy", fetchPriority: "low" })}
    />
  );
}
