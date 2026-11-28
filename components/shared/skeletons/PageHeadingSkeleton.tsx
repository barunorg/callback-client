import { cn } from "@/lib/utils";
import SkeletonBlock from "./SkeletonBlock";

/** Placeholder for `PageHeading`: eyebrow, title, description and action. */
export default function PageHeadingSkeleton({
  hasEyebrow = true,
  descriptionLines = 1,
  hasAction = false,
  titleClassName = "w-64",
}: {
  hasEyebrow?: boolean;
  descriptionLines?: number;
  hasAction?: boolean;
  titleClassName?: string;
}) {
  return (
    <header className="mb-5 flex flex-wrap items-center justify-between gap-4">
      <div className="min-w-0 flex-1">
        {hasEyebrow && (
          <SkeletonBlock tone="canvas" className="mb-2.5 h-2.5 w-40" />
        )}
        <SkeletonBlock
          tone="canvas"
          className={cn("h-8 max-w-full", titleClassName)}
        />
        {Array.from({ length: descriptionLines }, (_, index) => (
          <SkeletonBlock
            key={index}
            tone="canvas"
            className="mt-2.5 h-3 w-full max-w-140 last:max-w-96"
          />
        ))}
      </div>
      {hasAction && (
        <SkeletonBlock tone="canvas" className="h-10 w-44 rounded-[10px]" />
      )}
    </header>
  );
}
