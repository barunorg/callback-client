import PageHeadingSkeleton from "@/components/shared/skeletons/PageHeadingSkeleton";
import PanelSkeleton from "@/components/shared/skeletons/PanelSkeleton";
import ScreenSkeleton from "@/components/shared/skeletons/ScreenSkeleton";
import SkeletonBlock from "@/components/shared/skeletons/SkeletonBlock";

export default function SettingsSkeleton() {
  return (
    <ScreenSkeleton label="Loading settings" className="max-w-220">
      <PageHeadingSkeleton />
      <div className="grid grid-cols-1 items-start gap-3.5 lg:grid-cols-2">
        <PanelSkeleton>
          <SkeletonBlock className="mb-3 h-9 w-24" />
          {Array.from({ length: 3 }, (_, index) => (
            <SkeletonBlock key={index} className="mb-2.5 h-3 w-full" />
          ))}
          <SkeletonBlock className="mt-2 h-11 w-full rounded-[10px]" />
        </PanelSkeleton>
        <PanelSkeleton rows={4} />
        <PanelSkeleton rows={4} />
        <PanelSkeleton rows={3} />
      </div>
    </ScreenSkeleton>
  );
}
