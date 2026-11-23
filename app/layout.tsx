import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  IBM_Plex_Mono,
  Instrument_Sans,
} from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
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
  title: "Callback",
  description:
    "Application to assist the international student to first job in the foreign country",
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
