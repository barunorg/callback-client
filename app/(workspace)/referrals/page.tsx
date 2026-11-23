import type { Metadata } from "next";
import ReferralsScreen from "./components/ReferralsScreen";

export const metadata: Metadata = { title: "Referrals · Callback" };

export default function ReferralsPage() {
  return <ReferralsScreen />;
}
