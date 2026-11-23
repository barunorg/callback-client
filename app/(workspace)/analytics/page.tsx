import type { Metadata } from "next";
import AnalyticsScreen from "./components/AnalyticsScreen";

export const metadata: Metadata = { title: "Analytics · Callback" };

export default function AnalyticsPage() {
  return <AnalyticsScreen />;
}
