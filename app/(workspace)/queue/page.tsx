import type { Metadata } from "next";
import ReviewQueueScreen from "./components/ReviewQueueScreen";

export const metadata: Metadata = { title: "Review queue · Callback" };

export default function ReviewQueuePage() {
  return <ReviewQueueScreen />;
}
