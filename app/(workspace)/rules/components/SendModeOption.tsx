import { cn } from "@/lib/utils";

export default function SendModeOption({
  value,
  title,
  description,
  isSelected,
  onSelect,
}: {
  value: string;
  title: string;
  description: string;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-start gap-3 rounded-[11px] border-[1.5px] px-3.75 py-3.25 transition-colors has-focus-visible:ring-2 has-focus-visible:ring-[#1E7A4F]/40",
        isSelected
          ? "border-[#1E7A4F] bg-[#EFF5EF]"
          : "border-[#E6E1D5] bg-white hover:border-[#B8B19E]",
      )}
    >
      <input
        type="radio"
        name="send-mode"
        value={value}
        checked={isSelected}
        onChange={onSelect}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={cn(
          "mt-px size-4 shrink-0 rounded-full border-2",
          isSelected
            ? "border-[#1E7A4F] bg-[#1E7A4F]"
            : "border-[#CFC9BA] bg-white",
        )}
      />
      <span>
        <span className="block text-[13.5px] font-bold">{title}</span>
        <span className="mt-0.5 block text-xs leading-[1.45] text-[#6B7A6E]">
          {description}
        </span>
      </span>
    </label>
  );
}
