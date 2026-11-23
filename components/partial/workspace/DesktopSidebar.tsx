"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import SidebarBrand from "./SidebarBrand";
import SidebarCollapsedFooter from "./SidebarCollapsedFooter";
import SidebarNav from "./SidebarNav";
import SidebarPlanCard from "./SidebarPlanCard";
import SidebarUserRow from "./SidebarUserRow";

export default function DesktopSidebar({ activeSlug }: { activeSlug: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onFocus={() => setIsExpanded(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsExpanded(false);
        }
      }}
      className="fixed inset-y-0 left-0 z-60 hidden w-16 lg:block"
    >
      <div
        className={cn(
          "absolute inset-y-0 left-0 flex flex-col overflow-x-hidden overflow-y-auto bg-[#0F1F16] px-3 py-4 text-[#E9EFE9] transition-[width] duration-200 ease-in-out",
          isExpanded
            ? "w-59.5 shadow-[30px_0_70px_-30px_rgba(15,31,22,.5)]"
            : "w-16",
        )}
      >
        <SidebarBrand isExpanded={isExpanded} />
        <SidebarNav activeSlug={activeSlug} isExpanded={isExpanded} />
        <div className="flex-1" />
        {isExpanded ? (
          <>
            <SidebarPlanCard />
            <SidebarUserRow />
          </>
        ) : (
          <SidebarCollapsedFooter />
        )}
      </div>
    </aside>
  );
}
