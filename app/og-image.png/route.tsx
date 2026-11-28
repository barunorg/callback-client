import { ImageResponse } from "next/og";
import {
  BRAND_ACCENT,
  BRAND_DARK,
  OG_IMAGE,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants/site";

// Static export: prerender /og-image.png at build time. A route handler (not
// the opengraph-image convention) keeps the ".png" extension, so GitHub Pages
// serves it as image/png — social crawlers reject extensionless images.
export const dynamic = "force-static";

// ImageResponse renders with Satori, which only understands inline styles.
export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: BRAND_DARK,
        color: "#E9EFE9",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: 22,
            background: BRAND_ACCENT,
            color: BRAND_DARK,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 56,
            fontWeight: 800,
          }}
        >
          C
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 44, fontWeight: 700 }}>{SITE_NAME}</span>
          <span style={{ fontSize: 22, opacity: 0.55, letterSpacing: 2 }}>
            {SITE_TAGLINE.toUpperCase()}
          </span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <span style={{ fontSize: 66, fontWeight: 800, lineHeight: 1.05 }}>
          Your job search is a full-time job.
        </span>
        <span style={{ fontSize: 66, fontWeight: 800, color: BRAND_ACCENT }}>
          Give it to us.
        </span>
        <span style={{ fontSize: 28, opacity: 0.7 }}>
          AI job applications for international students · F-1 · OPT · H-1B
        </span>
      </div>
    </div>,
    { width: OG_IMAGE.width, height: OG_IMAGE.height },
  );
}
