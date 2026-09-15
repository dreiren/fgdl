import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;
