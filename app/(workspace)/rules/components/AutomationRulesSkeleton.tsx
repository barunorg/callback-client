import PageHeadingSkeleton from "@/components/shared/skeletons/PageHeadingSkeleton";
import PanelSkeleton from "@/components/shared/skeletons/PanelSkeleton";
import ScreenSkeleton from "@/components/shared/skeletons/ScreenSkeleton";
import SkeletonBlock from "@/components/shared/skeletons/SkeletonBlock";

export default function AutomationRulesSkeleton() {
  return (
    <ScreenSkeleton label="Loading automation rules" className="max-w-195">
      <PageHeadingSkeleton />
      <div className="flex flex-col gap-3.5">
        <PanelSkeleton rows={3} />
        <PanelSkeleton>
          <div className="grid grid-cols-1 gap-2.75 sm:grid-cols-2">
            {Array.from({ length: 6 }, (_, index) => (
              <SkeletonBlock
                key={index}
                tone="row"
                className="h-14 rounded-[10px]"
              />
            ))}
          </div>
        </PanelSkeleton>
        <PanelSkeleton>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 4 }, (_, index) => (
              <SkeletonBlock
                key={index}
                tone="row"
                className="h-9 w-36 rounded-full"
              />
            ))}
          </div>
        </PanelSkeleton>
        <PanelSkeleton rows={5} />
      </div>
    </ScreenSkeleton>
  );
}
