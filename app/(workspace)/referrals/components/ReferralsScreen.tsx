"use client";

import { useSuspenseQueries } from "@tanstack/react-query";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import PageHeading from "@/components/shared/PageHeading";
import { usePlan } from "@/stores/PlanProvider";
import LockedReferralsRow from "./LockedReferralsRow";
import ReferralRow from "./ReferralRow";
import ReferralStats from "./ReferralStats";

export default function ReferralsScreen() {
  // Waits for the account too, so plan-dependent UI never flashes.
  const [{ data: referrals }] = useSuspenseQueries({
    queries: [workspaceQueries.referrals, workspaceQueries.account],
  });
  const { isPro } = usePlan();

  return (
    <div className="max-w-230">
      <PageHeading
        eyebrow="◆ WARM PATHS IN"
        title="Referrals"
        description={
          <>
            Your warm paths, mapped from LinkedIn. Referral-path applications
            reply <strong className="text-[#1E7A4F]">4× more often</strong> than
            cold ones.
          </>
        }
      />

      <ReferralStats stats={referrals.stats} />

      <ul className="flex flex-col gap-2.5">
        {referrals.paths.map((path) => (
          <li key={path.id}>
            <ReferralRow path={path} />
          </li>
        ))}
        {!isPro && (
          <li>
            <LockedReferralsRow count={referrals.lockedCount} />
          </li>
        )}
      </ul>

      <p className="mt-3.5 rounded-[12px] bg-[#0F1F16] px-4 py-3.25 text-xs leading-[1.55] text-[#E9EFE9]/80">
        Etiquette, enforced: drafts send from{" "}
        <strong className="text-[#E9EFE9]">your</strong> accounts only, one
        request per person ever, no nudge before 5 quiet days. Warm paths stay
        warm.
      </p>
    </div>
  );
}
