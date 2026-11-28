"use client";

import { useQuery } from "@tanstack/react-query";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import { workspaceNavigation } from "@/lib/constants/workspaceNavigation";
import SidebarNavItem from "./SidebarNavItem";

export default function SidebarNav({
  activeSlug,
  isExpanded,
  onNavigate,
}: {
  activeSlug: string;
  isExpanded: boolean;
  onNavigate?: () => void;
}) {
  const { data: queue = [] } = useQuery(workspaceQueries.queue);

  return (
    <nav aria-label="Workspace" className="flex flex-col gap-0.75">
      {workspaceNavigation.map((item) => (
        <SidebarNavItem
          key={item.slug}
          item={item}
          isActive={activeSlug === item.slug}
          isExpanded={isExpanded}
          badgeCount={item.slug === "queue" ? queue.length : 0}
          onNavigate={onNavigate}
        />
      ))}
    </nav>
  );
}
