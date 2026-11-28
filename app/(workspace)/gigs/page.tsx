import type { Metadata } from "next";
import ClientOnly from "@/components/shared/ClientOnly";
import GigsScreen from "./components/GigsScreen";
import GigsSkeleton from "./components/GigsSkeleton";

export const metadata: Metadata = { title: "Gigs" };

// Data is per-user, so the screen renders (and fetches) only in the browser.
// The static HTML shows the matching skeleton instead.
export default function GigsPage() {
  return (
    <ClientOnly fallback={<GigsSkeleton />}>
      <GigsScreen />
    </ClientOnly>
  );
}
