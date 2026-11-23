import PageHeadingSkeleton from "@/components/shared/skeletons/PageHeadingSkeleton";
import PanelSkeleton from "@/components/shared/skeletons/PanelSkeleton";
import RowSkeleton from "@/components/shared/skeletons/RowSkeleton";
import ScreenSkeleton from "@/components/shared/skeletons/ScreenSkeleton";
import SkeletonBlock from "@/components/shared/skeletons/SkeletonBlock";
import StatCardSkeleton from "@/components/shared/skeletons/StatCardSkeleton";

export default function DashboardSkeleton() {
  return (
    <ScreenSkeleton label="Loading dashboard" className="max-w-260">
      <PageHeadingSkeleton
        descriptionLines={0}
        hasAction
        titleClassName="w-136"
      />
      <section className="mb-6.5 grid grid-cols-2 gap-3.5 xl:grid-cols-4">
        <StatCardSkeleton dark />
        <StatCardSkeleton />
        <StatCardSkeleton />
        <StatCardSkeleton />
      </section>
      <div className="grid grid-cols-1 items-start gap-3.5 xl:grid-cols-[1.6fr_1fr]">
        <PanelSkeleton>
          <div className="flex flex-col gap-2">
            {Array.from({ length: 4 }, (_, index) => (
              <RowSkeleton key={index} tile="none" hasAction />
            ))}
          </div>
        </PanelSkeleton>
        <PanelSkeleton tone="dark">
          <div className="mb-3.5 flex gap-4">
            {Array.from({ length: 3 }, (_, index) => (
              <SkeletonBlock key={index} tone="dark" className="h-10 w-20" />
            ))}
          </div>
          <SkeletonBlock tone="dark" className="h-10 w-full rounded-[10px]" />
        </PanelSkeleton>
      </div>
    </ScreenSkeleton>
  );
}
