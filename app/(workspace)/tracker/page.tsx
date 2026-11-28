import type { Metadata } from "next";
import ClientOnly from "@/components/shared/ClientOnly";
import TrackerScreen from "./components/TrackerScreen";
import TrackerSkeleton from "./components/TrackerSkeleton";

export const metadata: Metadata = { title: "Tracker" };

// Data is per-user, so the screen renders (and fetches) only in the browser.
// The static HTML shows the matching skeleton instead.
export default function TrackerPage() {
  return (
    <ClientOnly fallback={<TrackerSkeleton />}>
      <TrackerScreen />
    </ClientOnly>
  );
}
