import type { Metadata } from "next";
import TrackerScreen from "./components/TrackerScreen";

export const metadata: Metadata = { title: "Tracker · Callback" };

export default function TrackerPage() {
  return <TrackerScreen />;
}
