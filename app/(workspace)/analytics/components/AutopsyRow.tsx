import { Check } from "lucide-react";
import type { AutopsyItem } from "@/types/workspace/analytics";
import ActionButton from "@/components/shared/ActionButton";
import Pill from "@/components/shared/Pill";

export default function AutopsyRow({
  item,
  isApplying,
  onApprove,
}: {
  item: AutopsyItem;
  isApplying: boolean;
  onApprove: () => void;
}) {
  return (
    <li className="flex flex-col gap-2.5 rounded-[11px] border border-[#E6E1D5] bg-white px-3.75 py-3.25 sm:flex-row sm:items-start sm:gap-3.25">
      <Pill
        tone={item.tone}
        className="mt-0.5 w-fit rounded-sm px-2.25 py-1 text-[10px] font-extrabold tracking-wider"
      >
        {item.label}
      </Pill>
      <p className="flex-1 text-[12.5px] leading-[1.55] text-[#2A342C]">
        {item.finding} <strong>Fix:</strong> {item.fix}
      </p>
      {item.isApplied ? (
        <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-bold text-[#1E7A4F]">
          applied
          <Check aria-hidden="true" strokeWidth={3} className="size-3" />
        </span>
      ) : (
        <ActionButton
          size="sm"
          className="w-fit shrink-0 rounded-md"
          disabled={isApplying}
          onClick={onApprove}
        >
          {isApplying ? "Applying…" : "Approve fix"}
        </ActionButton>
      )}
    </li>
  );
}
