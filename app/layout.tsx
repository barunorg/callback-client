import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description:
    "Application to assist the international student to first job in the foreign country",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased bg-black">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
