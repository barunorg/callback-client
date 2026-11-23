"use client";

import SkeletonBlock from "@/components/shared/skeletons/SkeletonBlock";
import { usePlan } from "@/stores/PlanProvider";
import UserAvatar from "./UserAvatar";

export default function SidebarUserRow() {
  const { account, isPro } = usePlan();

  if (!account) {
    return (
      <div aria-hidden="true" className="flex items-center gap-2.5 px-0.5 py-1">
        <SkeletonBlock tone="dark" className="size-8 shrink-0 rounded-full" />
        <div className="flex flex-1 flex-col gap-1.5">
          <SkeletonBlock tone="dark" className="h-3 w-24" />
          <SkeletonBlock tone="dark" className="h-2.5 w-32" />
        </div>
      </div>
    );
  }

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
