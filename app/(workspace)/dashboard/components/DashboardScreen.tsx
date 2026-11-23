"use client";

import { useSuspenseQueries } from "@tanstack/react-query";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import StatCard from "@/components/shared/StatCard";
import { usePlan } from "@/stores/PlanProvider";
import AttentionList from "./AttentionList";
import DashboardHeading from "./DashboardHeading";
import GhostRegistryPanel from "./GhostRegistryPanel";

export default function DashboardScreen() {
  const [{ data: dashboard }, { data: queue }] = useSuspenseQueries({
    queries: [
      workspaceQueries.dashboard,
      workspaceQueries.queue,
      workspaceQueries.account,
    ],
  });
  const { isPro, sentToday, remainingSends } = usePlan();

  const sendsLeftDetail = isPro
    ? `${remainingSends} more available today (Pro)`
    : `${remainingSends} free send${remainingSends === 1 ? "" : "s"} left — Pro lifts to 25/day`;

  return (
    <div className="max-w-260">
      <DashboardHeading
        sweepLabel={dashboard.sweepLabel}
        newMatches={dashboard.newMatches}
      />

      <section
        aria-label="Today at a glance"
        className="mb-6.5 grid grid-cols-2 gap-3.5 xl:grid-cols-4"
      >
        <StatCard
          dark
          value={String(dashboard.newMatches)}
          label="New matches"
          detail={dashboard.newMatchesDetail}
        />
        <StatCard
          value={String(queue.length)}
          label="Awaiting approval"
          detail="tailored & ready to send"
          valueClassName="text-[#1E7A4F]"
        />
        <StatCard
          value={String(sentToday)}
          label="Sent today"
          detail={sendsLeftDetail}
        />
        <StatCard
          value={String(dashboard.recruiterReplies)}
          label="Recruiter replies"
          detail={dashboard.recruiterRepliesDetail}
          valueClassName="text-[#B4762A]"
        />
      </section>

      <div className="grid grid-cols-1 items-start gap-3.5 xl:grid-cols-[1.6fr_1fr]">
        <AttentionList items={dashboard.attention} />
        <GhostRegistryPanel registry={dashboard.ghostRegistry} />
      </div>
    </div>
  );
}
