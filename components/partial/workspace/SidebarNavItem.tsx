import Link from "next/link";
import { cn } from "@/lib/utils";
import type { WorkspaceNavItem } from "@/lib/constants/workspaceNavigation";

export default function SidebarNavItem({
  item,
  isActive,
  isExpanded,
  badgeCount,
  onNavigate,
}: {
  item: WorkspaceNavItem;
  isActive: boolean;
  isExpanded: boolean;
  badgeCount: number;
  onNavigate?: () => void;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={`/${item.slug}/`}
      title={item.label}
      aria-current={isActive ? "page" : undefined}
      onClick={onNavigate}
      className={cn(
        "relative flex w-full items-center gap-3 rounded-[10px] p-2.5 text-[13.5px] whitespace-nowrap transition-colors",
        isActive
          ? "bg-white/12 font-bold text-white"
          : "font-medium text-[#E9EFE9]/72 hover:bg-white/8",
      )}
    >
      <Icon aria-hidden="true" strokeWidth={1.7} className="size-5 shrink-0" />
      <span
        className={cn(
          "flex-1 transition-opacity duration-150",
          isExpanded ? "opacity-100" : "opacity-0",
        )}
      >
        {item.label}
      </span>
      {badgeCount > 0 &&
        (isExpanded ? (
          <span className="rounded-full bg-[#8FE388] px-1.75 py-0.5 text-[10.5px] font-bold text-[#0F1F16]">
            {badgeCount}
          </span>
        ) : (
          <span
            aria-label={`${badgeCount} waiting`}
            className="absolute top-1.75 right-1.75 size-1.75 rounded-full bg-[#8FE388]"
          />
        ))}
    </Link>
  );
}
