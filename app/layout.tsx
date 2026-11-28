import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  IBM_Plex_Mono,
  Instrument_Sans,
} from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { env } from "@/config/env";
import {
  BRAND_DARK,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/constants/site";
import { sharedOpenGraph, sharedTwitter } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import TanStackQueryClientProvider from "@/components/providers/TanStackQueryClientProvider";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-bricolage-grotesque",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS,
  category: "career",
  openGraph: {
    ...sharedOpenGraph,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    ...sharedTwitter,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: env.googleSiteVerification,
  },
};

export const viewport: Viewport = {
  themeColor: BRAND_DARK,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full bg-black font-sans antialiased",
        instrumentSans.variable,
        bricolageGrotesque.variable,
        ibmPlexMono.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <TanStackQueryClientProvider>
          <NuqsAdapter>{children}</NuqsAdapter>
        </TanStackQueryClientProvider>
      </body>
    </html>
  );
}
