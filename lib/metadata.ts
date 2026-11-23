import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, SITE_TITLE } from "@/lib/constants/site";

// Next.js replaces nested fields like `openGraph` as a whole in child
// segments, so the shared parts live here and every page spreads them
// (Next.js docs → generateMetadata → "Overwriting fields").
export const sharedOpenGraph = {
  type: "website",
  siteName: SITE_NAME,
  locale: "en_US",
  images: [OG_IMAGE],
} satisfies NonNullable<Metadata["openGraph"]>;

export const sharedTwitter = {
  card: "summary_large_image",
  images: [OG_IMAGE.url],
} satisfies NonNullable<Metadata["twitter"]>;

/**
 * Metadata for a public, indexable page: title, search snippet, canonical
 * URL and the matching Open Graph / Twitter card.
 *
 * @param title - page title (the root layout adds "· Callback"); omit on the
 *   home page to use the default site title
 * @param description - search-result snippet, ideally under 160 characters
 * @param path - the page URL path with a trailing slash, e.g. "/auth/"
 */
export function createPageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle = title ? `${title} · ${SITE_NAME}` : SITE_TITLE;

  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      ...sharedOpenGraph,
      url: path,
      title: socialTitle,
      description,
    },
    twitter: { ...sharedTwitter, title: socialTitle, description },
  };
}
