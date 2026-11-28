import PageHeadingSkeleton from "@/components/shared/skeletons/PageHeadingSkeleton";
import RowSkeleton from "@/components/shared/skeletons/RowSkeleton";
import ScreenSkeleton from "@/components/shared/skeletons/ScreenSkeleton";
import SkeletonBlock from "@/components/shared/skeletons/SkeletonBlock";

export default function ReviewQueueSkeleton() {
  return (
    <ScreenSkeleton label="Loading review queue" className="max-w-280">
      <PageHeadingSkeleton hasAction />
      <div className="grid grid-cols-1 items-start gap-3.5 xl:grid-cols-[minmax(230px,300px)_minmax(0,1fr)]">
        <div className="flex flex-col gap-2">
          {Array.from({ length: 3 }, (_, index) => (
            <RowSkeleton key={index} surface="card" tile="none" lines={3} />
          ))}
        </div>
        <section className="overflow-hidden rounded-[14px] border border-[#DED9CC] bg-[#FBFAF7]">
          <header className="flex items-center justify-between gap-3 border-b border-[#E6E1D5] px-5.5 py-4.5">
            <div className="flex flex-1 flex-col gap-2">
              <SkeletonBlock className="h-5 w-72 max-w-full" />
              <SkeletonBlock className="h-3 w-96 max-w-full" />
            </div>
            <SkeletonBlock className="h-9 w-48 rounded-[9px]" />
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-2.5 p-5.5">
              <SkeletonBlock className="h-3 w-40" />
              <SkeletonBlock
                tone="row"
                className="h-56 w-full rounded-[10px]"
              />
            </div>
            <div className="flex flex-col gap-2.5 p-5.5">
              <SkeletonBlock className="h-3 w-32" />
              {Array.from({ length: 4 }, (_, index) => (
                <SkeletonBlock key={index} className="h-3 w-full" />
              ))}
              <SkeletonBlock className="mt-2 h-10 w-full rounded-[9px]" />
              <SkeletonBlock className="h-14 w-full rounded-[10px]" />
            </div>
          </div>
        </section>
      </div>
    </ScreenSkeleton>
  );
}
