import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants/site";

// Static export: generate /robots.txt at build time.
export const dynamic = "force-static";

// Crawling stays open everywhere: private workspace pages opt out with a
// `noindex` meta tag instead, which crawlers can only see if not blocked here.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
