import type { MetadataRoute } from "next";
import { attorneys, practiceAreas } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fgdlaw.net";
  const staticRoutes = [
    "",
    "/about",
    "/practice-areas",
    "/team",
    "/contact",
    "/careers",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    })),
    ...practiceAreas.map((area) => ({
      url: `${base}/practice-areas/${area.slug}`,
      lastModified: new Date(),
    })),
    ...attorneys.map((attorney) => ({
      url: `${base}/team/${attorney.slug}`,
      lastModified: new Date(),
    })),
  ];
}
