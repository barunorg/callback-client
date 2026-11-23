import { cn } from "@/lib/utils";
import type { MatchFilterId, MatchesData } from "@/types/workspace/matches";

export default function MatchFilters({
  filters,
  activeFilter,
  onChange,
}: {
  filters: MatchesData["filters"];
  activeFilter: MatchFilterId;
  onChange: (filterId: MatchFilterId) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Filter matches"
      className="flex flex-wrap gap-2"
    >
      {filters.map((filter) => {
        const isActive = filter.id === activeFilter;

        return (
          <button
            key={filter.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(filter.id)}
            className={cn(
              "rounded-full border px-3.25 py-1.75 text-xs font-semibold transition-colors",
              isActive
                ? "border-[#141C17] bg-[#141C17] text-white"
                : filter.id === "flagged"
                  ? "border-[#E0BFB8] bg-white text-[#B4483A] hover:bg-[#FBEAE7]"
                  : "border-[#CFC9BA] bg-white text-[#4A554C] hover:bg-[#F0EDE4]",
            )}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
