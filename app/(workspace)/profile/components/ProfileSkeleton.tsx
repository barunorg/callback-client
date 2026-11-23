import PageHeadingSkeleton from "@/components/shared/skeletons/PageHeadingSkeleton";
import PanelSkeleton from "@/components/shared/skeletons/PanelSkeleton";
import RowSkeleton from "@/components/shared/skeletons/RowSkeleton";
import ScreenSkeleton from "@/components/shared/skeletons/ScreenSkeleton";
import SkeletonBlock from "@/components/shared/skeletons/SkeletonBlock";

export default function ProfileSkeleton() {
  return (
    <ScreenSkeleton label="Loading profile" className="max-w-195">
      <PageHeadingSkeleton />
      <div className="mb-5 flex flex-col gap-3">
        {Array.from({ length: 4 }, (_, index) => (
          <RowSkeleton key={index} surface="card" tile="circle" />
        ))}
      </div>
      <PanelSkeleton>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {Array.from({ length: 8 }, (_, index) => (
            <SkeletonBlock
              key={index}
              tone="row"
              className="h-14 rounded-[10px]"
            />
          ))}
        </div>
      </PanelSkeleton>
    </ScreenSkeleton>
  );
}
