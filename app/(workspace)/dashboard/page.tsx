import type { Metadata } from "next";
import ClientOnly from "@/components/shared/ClientOnly";
import DashboardScreen from "./components/DashboardScreen";
import DashboardSkeleton from "./components/DashboardSkeleton";

export const metadata: Metadata = { title: "Dashboard" };

// Data is per-user, so the screen renders (and fetches) only in the browser.
// The static HTML shows the matching skeleton instead.
export default function DashboardPage() {
  return (
    <ClientOnly fallback={<DashboardSkeleton />}>
      <DashboardScreen />
    </ClientOnly>
  );
}
