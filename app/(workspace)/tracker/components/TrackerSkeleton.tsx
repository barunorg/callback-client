import { cn } from "@/lib/utils";
import PageHeadingSkeleton from "@/components/shared/skeletons/PageHeadingSkeleton";
import ScreenSkeleton from "@/components/shared/skeletons/ScreenSkeleton";
import SkeletonBlock from "@/components/shared/skeletons/SkeletonBlock";

// Cards per column in the design: Applied, Viewed, Replied, Closed.
const cardsPerColumn = [3, 2, 2, 2];

export default function TrackerSkeleton() {
  return (
    <ScreenSkeleton label="Loading tracker">
      <PageHeadingSkeleton />
      <div className="grid grid-cols-1 items-start gap-3.5 md:grid-cols-2 xl:grid-cols-4">
        {cardsPerColumn.map((cardCount, columnIndex) => {
          const isHighlighted = columnIndex === 2;

          return (
            <div
              key={columnIndex}
              className={cn(
                "rounded-[14px] p-3",
                isHighlighted ? "bg-[#12281C]" : "bg-[#E9E5D9]",
              )}
            >
              <div className="flex items-center justify-between px-1.5 pt-0.5 pb-2.5">
                <SkeletonBlock
                  tone={isHighlighted ? "dark" : "canvas"}
                  className="h-3 w-24"
                />
                <SkeletonBlock
                  tone={isHighlighted ? "dark" : "canvas"}
                  className="h-4.5 w-7 rounded-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                {Array.from({ length: cardCount }, (_, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 rounded-[11px] border border-[#DED9CC] bg-[#FBFAF7] px-3.25 py-3"
                  >
                    <SkeletonBlock className="h-3.5 w-3/5" />
                    <SkeletonBlock className="h-2.5 w-4/5" />
                    <SkeletonBlock tone="row" className="h-7 w-full" />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </ScreenSkeleton>
  );
}
