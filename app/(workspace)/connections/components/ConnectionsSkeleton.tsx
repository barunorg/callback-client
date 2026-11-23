import PageHeadingSkeleton from "@/components/shared/skeletons/PageHeadingSkeleton";
import RowSkeleton from "@/components/shared/skeletons/RowSkeleton";
import ScreenSkeleton from "@/components/shared/skeletons/ScreenSkeleton";
import SkeletonBlock from "@/components/shared/skeletons/SkeletonBlock";

export default function ConnectionsSkeleton() {
  return (
    <ScreenSkeleton label="Loading connections" className="max-w-230">
      <PageHeadingSkeleton />
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-xl border border-[#DED9CC] bg-[#FBFAF7] px-5 py-4.75"
          >
            <RowSkeleton surface="card" lines={2} hasAction />
            <SkeletonBlock className="h-3 w-full" />
            <SkeletonBlock className="h-3 w-4/5" />
            <SkeletonBlock className="h-3 w-3/5" />
          </div>
        ))}
      </div>
    </ScreenSkeleton>
  );
}
