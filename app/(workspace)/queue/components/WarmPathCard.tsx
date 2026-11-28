import type { WarmPath } from "@/types/workspace/queue";
import ActionButton from "@/components/shared/ActionButton";

export default function WarmPathCard({
  warmPath,
  isOn,
  onToggle,
}: {
  warmPath: WarmPath;
  isOn: boolean;
  onToggle: () => void;
}) {
  return (
    <section
      aria-labelledby="warm-path-title"
      className="mt-2 rounded-lg border border-[#C8D8EA] bg-[#E9F0F8] px-3.25 py-3"
    >
      <h3
        id="warm-path-title"
        className="mb-1.25 text-[10.5px] font-extrabold tracking-[0.06em] text-[#1E4A7A]"
      >
        WARM PATH FOUND
      </h3>
      <p className="mb-2.25 text-xs leading-normal text-[#1E3A5A]">
        {warmPath.line}. Alumni referrals get ~4× more interviews than cold
        applications.
      </p>
      <ActionButton
        variant="blue"
        size="sm"
        aria-pressed={isOn}
        onClick={onToggle}
        className="rounded-md py-2"
      >
        {isOn
          ? "← Back to direct application"
          : `Switch to referral via ${warmPath.name} →`}
      </ActionButton>
    </section>
  );
}
