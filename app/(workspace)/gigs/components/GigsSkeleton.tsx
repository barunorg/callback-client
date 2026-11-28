import PageHeadingSkeleton from "@/components/shared/skeletons/PageHeadingSkeleton";
import RowSkeleton from "@/components/shared/skeletons/RowSkeleton";
import ScreenSkeleton from "@/components/shared/skeletons/ScreenSkeleton";
import SkeletonBlock from "@/components/shared/skeletons/SkeletonBlock";

export default function GigsSkeleton() {
  return (
    <ScreenSkeleton label="Loading gigs" className="max-w-230">
      <PageHeadingSkeleton descriptionLines={2} />
      <SkeletonBlock tone="canvas" className="mb-4 h-14 w-full rounded-xl" />
      <div className="mb-4 flex flex-col gap-2.75">
        {Array.from({ length: 3 }, (_, index) => (
          <RowSkeleton key={index} surface="card" lines={3} hasAction />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {Array.from({ length: 3 }, (_, index) => (
          <RowSkeleton key={index} surface="card" tile="none" lines={3} />
        ))}
      </div>
    </ScreenSkeleton>
  );
}
