import ActionButton from "@/components/shared/ActionButton";

export default function BatchBanner({
  count,
  isBusy,
  onApproveAll,
}: {
  count: number;
  isBusy: boolean;
  onApproveAll: () => void;
}) {
  return (
    <section
      aria-label="Batch review"
      className="mb-3.5 flex flex-wrap items-center gap-3 rounded-[12px] bg-[#0F1F16] px-4 py-3 text-[#E9EFE9]"
    >
      <p className="min-w-0 flex-1 text-[13px]">
        <strong>{count} applications</strong> selected · all above 85% match,
        all companies verified
      </p>
      <ActionButton
        variant="accent"
        disabled={isBusy}
        onClick={onApproveAll}
        className="px-4"
      >
        Approve &amp; send all
      </ActionButton>
    </section>
  );
}
