"use client";

import { useQuery } from "@tanstack/react-query";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import ActionButton from "@/components/shared/ActionButton";
import { usePlan } from "@/stores/PlanProvider";

export default function SidebarPlanCard() {
  const { isPro, sentToday, dailyCap, openUpgrade } = usePlan();
  const { data: queue = [] } = useQuery(workspaceQueries.queue);

  if (isPro) {
    return (
      <div className="mb-3 rounded-xl border border-white/9 bg-white/6 px-3.25 py-3">
        <p className="mb-1.5 flex items-center gap-1.75 text-[11.5px] font-semibold tracking-[0.03em] whitespace-nowrap">
          <span className="size-1.75 animate-ap-pulse rounded-full bg-[#8FE388]" />
          AGENT ACTIVE · PRO
        </p>
        <p className="min-w-47.5 text-[11px] leading-[1.45] text-[#E9EFE9]/60">
          Scanning 6 sources · next sweep in 42 min. {queue.length} applications
          await your approval.
        </p>
      </div>
    );
  }

  const usedPercent = Math.min(100, (sentToday / dailyCap) * 100);

  return (
    <div className="mb-3 rounded-xl border border-white/9 bg-white/6 p-3.25 whitespace-nowrap">
      <div className="mb-2.25 flex items-center justify-between text-[11px] font-bold">
        <span className="tracking-wider text-[#E9EFE9]/75">FREE PLAN</span>
        <span className="text-[#F4B942]">
          {sentToday} / {dailyCap} today
        </span>
      </div>
      <div className="mb-2.75 h-1.25 overflow-hidden rounded-full bg-white/12">
        <div
          className="h-full rounded-full bg-[#F4B942]"
          style={{ width: `${usedPercent}%` }}
        />
      </div>
      <ActionButton
        variant="accent"
        className="w-full p-2.25 text-xs font-extrabold"
        onClick={() => openUpgrade("GO FURTHER, FASTER")}
      >
        Upgrade to Pro — $9/mo
      </ActionButton>
    </div>
  );
}
