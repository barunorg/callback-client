import { cn } from "@/lib/utils";
import PageHeadingSkeleton from "@/components/shared/skeletons/PageHeadingSkeleton";
import PanelSkeleton from "@/components/shared/skeletons/PanelSkeleton";
import ScreenSkeleton from "@/components/shared/skeletons/ScreenSkeleton";
import SkeletonBlock from "@/components/shared/skeletons/SkeletonBlock";
import StatCardSkeleton from "@/components/shared/skeletons/StatCardSkeleton";

export default function AnalyticsSkeleton() {
  return (
    <ScreenSkeleton label="Loading analytics" className="max-w-260">
      <PageHeadingSkeleton />
      <section className="mb-3.5 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
        <StatCardSkeleton />
        <StatCardSkeleton />
        <StatCardSkeleton />
      </section>
      <PanelSkeleton className="mb-3.5">
        <div className="flex flex-col gap-3.25">
          {["w-[86%]", "w-[38%]", "w-[64%]", "w-[16%]"].map((width, index) => (
            <div
              key={index}
              className="grid grid-cols-1 items-center gap-2 sm:grid-cols-[190px_1fr_52px] sm:gap-3.5"
            >
              <SkeletonBlock className="h-3 w-40" />
              <div className="h-5.5 overflow-hidden rounded-md bg-[#EDEAE0]">
                <SkeletonBlock className={cn("h-full rounded-md", width)} />
              </div>
              <SkeletonBlock className="h-3 w-full" />
            </div>
          ))}
        </div>
      </PanelSkeleton>
      <PanelSkeleton rows={3} />
    </ScreenSkeleton>
  );
}
