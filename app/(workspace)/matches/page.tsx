import type { Metadata } from "next";
import ClientOnly from "@/components/shared/ClientOnly";
import MatchesScreen from "./components/MatchesScreen";
import MatchesSkeleton from "./components/MatchesSkeleton";

export const metadata: Metadata = { title: "Matches" };

// Data is per-user, so the screen renders (and fetches) only in the browser.
// The static HTML shows the matching skeleton instead.
export default function MatchesPage() {
  return (
    <ClientOnly fallback={<MatchesSkeleton />}>
      <MatchesScreen />
    </ClientOnly>
  );
}
