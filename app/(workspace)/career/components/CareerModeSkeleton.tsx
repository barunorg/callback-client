import PageHeadingSkeleton from "@/components/shared/skeletons/PageHeadingSkeleton";
import PanelSkeleton from "@/components/shared/skeletons/PanelSkeleton";
import ScreenSkeleton from "@/components/shared/skeletons/ScreenSkeleton";
import SkeletonBlock from "@/components/shared/skeletons/SkeletonBlock";

export default function CareerModeSkeleton() {
  return (
    <ScreenSkeleton label="Loading career mode" className="max-w-230">
      <PageHeadingSkeleton hasEyebrow={false} descriptionLines={2} />
      <PanelSkeleton className="mb-3.5">
        <div className="flex flex-col gap-4">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="flex gap-3.25">
              <SkeletonBlock className="size-4.5 shrink-0 rounded-full" />
              <div className="flex flex-1 flex-col gap-2">
                <SkeletonBlock className="h-3 w-48" />
                <SkeletonBlock className="h-2.5 w-4/5" />
              </div>
            </div>
          ))}
        </div>
      </PanelSkeleton>
      <PanelSkeleton tone="dark" className="mb-3.5">
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          {Array.from({ length: 4 }, (_, index) => (
            <SkeletonBlock
              key={index}
              tone="dark"
              className="h-24 rounded-[11px]"
            />
          ))}
        </div>
      </PanelSkeleton>
      <PanelSkeleton rows={2} className="mb-3.5" />
      <PanelSkeleton>
        <div className="grid grid-cols-3 gap-2.5">
          {Array.from({ length: 3 }, (_, index) => (
            <SkeletonBlock
              key={index}
              tone="row"
              className="h-20 rounded-[11px]"
            />
          ))}
        </div>
      </PanelSkeleton>
    </ScreenSkeleton>
  );
}
