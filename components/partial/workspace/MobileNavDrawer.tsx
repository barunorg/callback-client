"use client";

import { X } from "lucide-react";
import SidebarBrand from "./SidebarBrand";
import SidebarNav from "./SidebarNav";
import SidebarPlanCard from "./SidebarPlanCard";
import SidebarUserRow from "./SidebarUserRow";

export default function MobileNavDrawer({
  activeSlug,
  onClose,
}: {
  activeSlug: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-[#0F1F16]/45"
      />
      <aside className="absolute inset-y-0 left-0 flex w-[min(18rem,88vw)] flex-col overflow-hidden bg-[#0F1F16] px-3 py-4 text-[#E9EFE9] shadow-2xl">
        <div className="flex shrink-0 items-start justify-between">
          <SidebarBrand isExpanded />
          <button
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
            className="grid size-9 place-items-center rounded-lg text-white/70 hover:bg-white/10"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>
        <div className="scrollbar-none min-h-0 flex-1 overflow-y-auto">
          <SidebarNav activeSlug={activeSlug} isExpanded onNavigate={onClose} />
        </div>
        <div className="shrink-0 pt-6">
          <SidebarPlanCard />
          <SidebarUserRow />
        </div>
      </aside>
    </div>
  );
}
