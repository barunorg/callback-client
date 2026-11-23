import { cn } from "@/lib/utils";
import SkeletonBlock from "./SkeletonBlock";

/**
 * Placeholder for a list item: optional logo tile, a few text lines and an
 * optional right-hand button. `surface="row"` is a white row inside a panel,
 * `surface="card"` a standalone cream card on the page background.
 */
export default function RowSkeleton({
  surface = "row",
  tile = "square",
  lines = 2,
  hasAction = false,
}: {
  surface?: "row" | "card";
  tile?: "square" | "circle" | "none";
  lines?: number;
  hasAction?: boolean;
}) {
  const isCard = surface === "card";
  const tone = isCard ? "panel" : "row";

  return (
    <div
      className={cn(
        "flex items-center gap-3",
        isCard
          ? "rounded-xl border border-[#DED9CC] bg-[#FBFAF7] p-4.5"
          : "rounded-[11px] border border-[#E6E1D5] bg-white px-3.5 py-3",
      )}
    >
      {tile !== "none" && (
        <SkeletonBlock
          tone={tone}
          className={cn(
            "shrink-0",
            isCard ? "size-11" : "size-8.5",
            tile === "circle" ? "rounded-full" : "rounded-[10px]",
          )}
        />
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        {Array.from({ length: lines }, (_, index) => (
          <SkeletonBlock
            key={index}
            tone={tone}
            className={cn("h-3", index === 0 ? "w-1/2" : "w-4/5")}
          />
        ))}
      </div>
      {hasAction && (
        <SkeletonBlock tone={tone} className="h-8 w-20 shrink-0 rounded-lg" />
      )}
    </div>
  );
}
