import PageHeadingSkeleton from "@/components/shared/skeletons/PageHeadingSkeleton";
import RowSkeleton from "@/components/shared/skeletons/RowSkeleton";
import ScreenSkeleton from "@/components/shared/skeletons/ScreenSkeleton";
import SkeletonBlock from "@/components/shared/skeletons/SkeletonBlock";

export default function ReferralsSkeleton() {
  return (
    <ScreenSkeleton label="Loading referrals" className="max-w-230">
      <PageHeadingSkeleton />
      <div className="mb-4 flex flex-wrap gap-6 rounded-[14px] border border-[#DED9CC] bg-[#FBFAF7] px-5 py-4">
        {Array.from({ length: 3 }, (_, index) => (
          <SkeletonBlock key={index} className="h-6 w-44" />
        ))}
      </div>
      <div className="flex flex-col gap-2.5">
        {Array.from({ length: 4 }, (_, index) => (
          <RowSkeleton
            key={index}
            surface="card"
            tile="circle"
            lines={3}
            hasAction={index === 0}
          />
        ))}
      </div>
    </ScreenSkeleton>
  );
}
