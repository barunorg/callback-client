import type { Metadata } from "next";
import ClientOnly from "@/components/shared/ClientOnly";
import ReferralsScreen from "./components/ReferralsScreen";
import ReferralsSkeleton from "./components/ReferralsSkeleton";

export const metadata: Metadata = { title: "Referrals" };

// Data is per-user, so the screen renders (and fetches) only in the browser.
// The static HTML shows the matching skeleton instead.
export default function ReferralsPage() {
  return (
    <ClientOnly fallback={<ReferralsSkeleton />}>
      <ReferralsScreen />
    </ClientOnly>
  );
}
