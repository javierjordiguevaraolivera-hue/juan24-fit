import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.juan24.fit/sitemap.xml",
    host: "https://www.juan24.fit",
  };
}
