import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.juan24.fit/",
      lastModified: new Date("2026-06-18"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
