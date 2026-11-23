import type { Metadata } from "next";
import MatchesScreen from "./components/MatchesScreen";

export const metadata: Metadata = { title: "Matches · Callback" };

export default function MatchesPage() {
  return <MatchesScreen />;
}
