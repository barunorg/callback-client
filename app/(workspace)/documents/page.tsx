import type { Metadata } from "next";
import ClientOnly from "@/components/shared/ClientOnly";
import DocumentsScreen from "./components/DocumentsScreen";
import DocumentsSkeleton from "./components/DocumentsSkeleton";

export const metadata: Metadata = { title: "Documents" };

// Data is per-user, so the screen renders (and fetches) only in the browser.
// The static HTML shows the matching skeleton instead.
export default function DocumentsPage() {
  return (
    <ClientOnly fallback={<DocumentsSkeleton />}>
      <DocumentsScreen />
    </ClientOnly>
  );
}
