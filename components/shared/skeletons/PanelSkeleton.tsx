import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import RowSkeleton from "./RowSkeleton";
import SkeletonBlock from "./SkeletonBlock";

/**
 * Placeholder for `Panel`: title, description and either `rows` list rows or
 * custom `children`.
 */
export default function PanelSkeleton({
  rows = 3,
  tone = "light",
  className,
  children,
}: {
  rows?: number;
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}) {
  const isDark = tone === "dark";
  const barTone = isDark ? "dark" : "panel";

  return (
    <section
      className={cn(
        "rounded-[14px] border p-5",
        isDark
          ? "border-[#0F1F16] bg-[#0F1F16]"
          : "border-[#DED9CC] bg-[#FBFAF7]",
        className,
      )}
    >
      <SkeletonBlock tone={barTone} className="mb-2 h-4 w-44" />
      <SkeletonBlock tone={barTone} className="mb-4 h-3 w-72 max-w-full" />
      {children ?? (
        <div className="flex flex-col gap-2.25">
          {Array.from({ length: rows }, (_, index) => (
            <RowSkeleton key={index} />
          ))}
        </div>
      )}
    </section>
  );
}
