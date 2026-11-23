import type { Metadata } from "next";
import DashboardScreen from "./components/DashboardScreen";

export const metadata: Metadata = { title: "Dashboard · Callback" };

export default function DashboardPage() {
  return <DashboardScreen />;
}
