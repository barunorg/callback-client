import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ResumeEdit, ResumeEditKind } from "@/types/workspace/queue";

const kindStyles: Record<ResumeEditKind, string> = {
  REORDER: "bg-[#E9F0F8] text-[#1E4A7A]",
  ADD: "bg-[#EFF5EF] text-[#1E7A4F]",
  REWORD: "bg-[#FFF7E6] text-[#B4762A]",
  TRIM: "bg-[#F3F1E9] text-[#6B7A6E]",
};

export default function ResumeEditRow({
  edit,
  isKept,
  onToggle,
}: {
  edit: ResumeEdit;
  isKept: boolean;
  onToggle: () => void;
}) {
  return (
    <li
      className={cn(
        "flex items-start gap-3.25 rounded-[12px] border border-[#E6E1D5] bg-white px-4 py-3.5 transition-opacity",
        !isKept && "opacity-50",
      )}
    >
      <span
        className={cn(
          "mt-0.5 shrink-0 rounded-sm px-2.25 py-1 text-[10px] font-extrabold tracking-wider",
          kindStyles[edit.kind],
        )}
      >
        {edit.kind}
      </span>
      <div className="min-w-0 flex-1">
        <del className="block text-xs leading-normal text-[#9A9384]">
          {edit.before}
        </del>
        <ins className="mt-0.75 block text-[13px] leading-normal font-semibold text-[#141C17] no-underline">
          {edit.after}
        </ins>
      </div>
      <button
        type="button"
        aria-pressed={isKept}
        onClick={onToggle}
        className={cn(
          "inline-flex shrink-0 items-center gap-1 rounded-md border px-3 py-1.75 text-[11.5px] font-bold transition-colors",
          isKept
            ? "border-[#A9C9AF] bg-[#EFF5EF] text-[#1E7A4F]"
            : "border-[#CFC9BA] bg-white text-[#9A9384] hover:bg-[#F0EDE4]",
        )}
      >
        {isKept ? (
          <>
            Keeping{" "}
            <Check aria-hidden="true" className="size-3" strokeWidth={3} />
          </>
        ) : (
          "Undone"
        )}
      </button>
    </li>
  );
}
