import type { Metadata } from "next";
import ConnectionsScreen from "./components/ConnectionsScreen";

export const metadata: Metadata = { title: "Connections · Callback" };

export default function ConnectionsPage() {
  return <ConnectionsScreen />;
}
