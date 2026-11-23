import { cn } from "@/lib/utils";
import PageHeadingSkeleton from "@/components/shared/skeletons/PageHeadingSkeleton";
import RowSkeleton from "@/components/shared/skeletons/RowSkeleton";
import ScreenSkeleton from "@/components/shared/skeletons/ScreenSkeleton";
import SkeletonBlock from "@/components/shared/skeletons/SkeletonBlock";

export default function MatchesSkeleton() {
  return (
    <ScreenSkeleton label="Loading matches" className="max-w-260">
      <PageHeadingSkeleton hasEyebrow={false} descriptionLines={2} />
      <div className="mb-4.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {["w-20", "w-36", "w-32", "w-40", "w-36"].map((width, index) => (
            <SkeletonBlock
              key={index}
              tone="canvas"
              className={cn("h-8 rounded-full", width)}
            />
          ))}
        </div>
        <SkeletonBlock tone="canvas" className="h-9 w-56 rounded-[10px]" />
      </div>
      <div className="flex flex-col gap-3">
        {Array.from({ length: 4 }, (_, index) => (
          <RowSkeleton key={index} surface="card" lines={4} hasAction />
        ))}
      </div>
    </ScreenSkeleton>
  );
}
