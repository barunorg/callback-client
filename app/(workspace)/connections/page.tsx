import type { Metadata } from "next";
import ClientOnly from "@/components/shared/ClientOnly";
import ConnectionsScreen from "./components/ConnectionsScreen";
import ConnectionsSkeleton from "./components/ConnectionsSkeleton";

export const metadata: Metadata = { title: "Connections" };

// Data is per-user, so the screen renders (and fetches) only in the browser.
// The static HTML shows the matching skeleton instead.
export default function ConnectionsPage() {
  return (
    <ClientOnly fallback={<ConnectionsSkeleton />}>
      <ConnectionsScreen />
    </ClientOnly>
  );
}
