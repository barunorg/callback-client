// Public, build-time environment values (static export: read during
// `next build`). Set them in .env.local or the CI build environment.

export const env = {
  /** Google Search Console "HTML tag" verification token (optional). */
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
};
