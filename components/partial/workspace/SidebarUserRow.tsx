"use client";

import { usePlan } from "@/stores/PlanProvider";
import UserAvatar from "./UserAvatar";

export default function SidebarUserRow() {
  const { account, isPro } = usePlan();

  if (!account) return null;

  return (
    <div className="flex items-center gap-2.5 px-0.5 py-1 whitespace-nowrap">
      <UserAvatar initials={account.initials} />
      <div className="min-w-0 flex-1">
        <p className="text-[12.5px] font-semibold">{account.name}</p>
        <p className="text-[10.5px] text-[#E9EFE9]/50">
          {account.program} · {isPro ? "Pro plan" : "Free plan"}
        </p>
      </div>
    </div>
  );
}
