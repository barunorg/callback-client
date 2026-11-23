"use client";

import { usePlan } from "@/stores/PlanProvider";

export default function LockedReferralsRow({ count }: { count: number }) {
  const { openUpgrade } = usePlan();

  return (
    <button
      type="button"
      onClick={() => openUpgrade("MORE ALUMNI PATHS ARE A PRO FEATURE")}
      className="flex w-full items-center gap-3.5 rounded-[13px] border border-dashed border-[#C9C2B0] bg-[#F3F1E9] px-4.5 py-3.75 text-left transition-colors hover:bg-[#EDEAE0]"
    >
      <span
        aria-hidden="true"
        className="grid size-10.5 shrink-0 place-items-center rounded-full bg-[#E4E0D4] text-xs font-extrabold text-[#6B7A6E]"
      >
        +{count}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[13.5px] font-bold text-[#4A554C]">
          {count} more alumni paths at your target companies
        </span>
        <span className="mt-0.5 block text-xs text-[#9A9384]">
          Free plan includes 1 referral request per week — Pro unlocks all of
          them
        </span>
      </span>
      <span className="shrink-0 text-xs font-extrabold text-[#1E7A4F]">
        Unlock →
      </span>
    </button>
  );
}
