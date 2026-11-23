"use client";

import { Zap } from "lucide-react";
import { usePlan } from "@/stores/PlanProvider";
import UserAvatar from "./UserAvatar";

export default function SidebarCollapsedFooter() {
  const { account, isPro, openUpgrade } = usePlan();

  return (
    <div className="flex flex-col items-center gap-3.5 pb-2">
      <span
        title="Autopilot active"
        className="size-2 animate-ap-pulse rounded-full bg-[#8FE388]"
      />
      {!isPro && (
        <button
          type="button"
          title="Upgrade to Pro"
          aria-label="Upgrade to Pro"
          onClick={() => openUpgrade("GO FURTHER, FASTER")}
          className="grid size-9 place-items-center rounded-[10px] bg-[#8FE388]/15 text-[#8FE388]"
        >
          <Zap aria-hidden="true" strokeWidth={1.8} className="size-4.25" />
        </button>
      )}
      {account && <UserAvatar initials={account.initials} />}
    </div>
  );
}
