import PageHeadingSkeleton from "@/components/shared/skeletons/PageHeadingSkeleton";
import PanelSkeleton from "@/components/shared/skeletons/PanelSkeleton";
import ScreenSkeleton from "@/components/shared/skeletons/ScreenSkeleton";

export default function DocumentsSkeleton() {
  return (
    <ScreenSkeleton label="Loading documents" className="max-w-230">
      <PageHeadingSkeleton descriptionLines={2} />
      <div className="grid grid-cols-1 items-start gap-3.5 lg:grid-cols-2">
        <PanelSkeleton rows={3} />
        <PanelSkeleton rows={3} />
        <PanelSkeleton rows={3} />
        <PanelSkeleton rows={4} />
      </div>
    </ScreenSkeleton>
  );
}
