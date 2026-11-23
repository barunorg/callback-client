import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants/site";

// Static export: generate /sitemap.xml at build time.
export const dynamic = "force-static";

// Only public, indexable pages belong here — the signed-in workspace is
// `noindex`. URLs end with "/" to match `trailingSlash: true`.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/auth/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
