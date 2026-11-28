"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import { cn } from "@/lib/utils";
import type { AnalyticsStat } from "@/types/workspace/analytics";
import PageHeading from "@/components/shared/PageHeading";
import StatCard from "@/components/shared/StatCard";
import ChannelResponsePanel from "./ChannelResponsePanel";
import RejectionAutopsyPanel from "./RejectionAutopsyPanel";

const statToneClasses: Record<AnalyticsStat["tone"], string> = {
  green: "text-[#1E7A4F]",
  ink: "text-[#141C17]",
  red: "text-[#B4483A]",
};

export default function AnalyticsScreen() {
  const { data: analytics } = useSuspenseQuery(workspaceQueries.analytics);

  return (
    <div className="max-w-260">
      <PageHeading
        eyebrow="◔ WHAT THE DATA SAYS"
        title="What’s working"
        description={`${analytics.periodLabel} — here’s where they land and where they die.`}
      />

      <section
        aria-label="Application results"
        className="mb-3.5 grid grid-cols-1 gap-3.5 sm:grid-cols-3"
      >
        {analytics.stats.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            detail={stat.detail}
            valueClassName={cn("text-[32px]", statToneClasses[stat.tone])}
          />
        ))}
      </section>

      <ChannelResponsePanel
        channels={analytics.channels}
        insight={analytics.insight}
      />
      <RejectionAutopsyPanel autopsies={analytics.autopsies} />
    </div>
  );
}
