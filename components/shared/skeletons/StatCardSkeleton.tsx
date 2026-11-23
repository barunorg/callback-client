import { cn } from "@/lib/utils";
import SkeletonBlock from "./SkeletonBlock";

/** Placeholder for `StatCard`. */
export default function StatCardSkeleton({ dark = false }: { dark?: boolean }) {
  const tone = dark ? "dark" : "panel";

  return (
    <div
      className={cn(
        "rounded-[14px] border px-4.5 pt-4.5 pb-3.75",
        dark
          ? "border-[#0F1F16] bg-[#0F1F16]"
          : "border-[#DED9CC] bg-[#FBFAF7]",
      )}
    >
      <SkeletonBlock tone={tone} className="h-9 w-16" />
      <SkeletonBlock tone={tone} className="mt-2.5 h-3 w-28" />
      <SkeletonBlock tone={tone} className="mt-2 h-2.5 w-36 max-w-full" />
    </div>
  );
}
