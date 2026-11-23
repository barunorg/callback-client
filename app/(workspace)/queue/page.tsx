import type { Metadata } from "next";
import ClientOnly from "@/components/shared/ClientOnly";
import ReviewQueueScreen from "./components/ReviewQueueScreen";
import ReviewQueueSkeleton from "./components/ReviewQueueSkeleton";

export const metadata: Metadata = { title: "Review queue" };

// Data is per-user, so the screen renders (and fetches) only in the browser.
// The static HTML shows the matching skeleton instead.
export default function ReviewQueuePage() {
  return (
    <ClientOnly fallback={<ReviewQueueSkeleton />}>
      <ReviewQueueScreen />
    </ClientOnly>
  );
}
