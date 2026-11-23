import type { Metadata } from "next";
import GigsScreen from "./components/GigsScreen";

export const metadata: Metadata = { title: "Gigs · Callback" };

export default function GigsPage() {
  return <GigsScreen />;
}
