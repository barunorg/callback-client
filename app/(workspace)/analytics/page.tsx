import type { Metadata } from "next";
import ClientOnly from "@/components/shared/ClientOnly";
import AnalyticsScreen from "./components/AnalyticsScreen";
import AnalyticsSkeleton from "./components/AnalyticsSkeleton";

export const metadata: Metadata = { title: "Analytics" };

// Data is per-user, so the screen renders (and fetches) only in the browser.
// The static HTML shows the matching skeleton instead.
export default function AnalyticsPage() {
  return (
    <ClientOnly fallback={<AnalyticsSkeleton />}>
      <AnalyticsScreen />
    </ClientOnly>
  );
}
