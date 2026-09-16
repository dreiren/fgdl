import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "1";

const redirects = [
  {
    source: "/practice-areas/corporate-labor",
    destination: "/practice-areas/labor-employment",
    permanent: true,
  },
  {
    source: "/practice-areas/litigation-criminal",
    destination: "/practice-areas/military-administrative",
    permanent: true,
  },
  {
    source: "/practice-areas/national-security",
    destination: "/practice-areas/military-administrative",
    permanent: true,
  },
  {
    source: "/practice-areas/general-counsel",
    destination: "/practice-areas/human-resources-advisory",
    permanent: true,
  },
  {
    source: "/insights",
    destination: "/",
    permanent: true,
  },
  {
    source: "/insights/:path*",
    destination: "/",
    permanent: true,
  },
];

const nextConfig: NextConfig = staticExport
  ? {
      output: "export",
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {
      images: { unoptimized: true },
      async redirects() {
        return redirects;
      },
      async rewrites() {
        return [{ source: "/inquiry.php", destination: "/api/inquiry" }];
      },
    };

export default nextConfig;
