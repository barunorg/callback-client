import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** A selectable card backed by a native radio input (keyboard-friendly). */
export default function ChoiceCard({
  name,
  title,
  description,
  isSelected,
  tag,
  onSelect,
}: {
  name: string;
  title: string;
  description: string;
  isSelected: boolean;
  tag?: ReactNode;
  onSelect: () => void;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer gap-3.25 rounded-[13px] border-[1.5px] px-4.25 py-3.75 transition-colors has-focus-visible:ring-2 has-focus-visible:ring-[#1E7A4F]/40",
        isSelected
          ? "border-[#1E7A4F] bg-[#EFF5EF]"
          : "border-[#E6E1D5] bg-[#FBFAF7] hover:border-[#B8B19E]",
      )}
    >
      <input
        type="radio"
        name={name}
        checked={isSelected}
        onChange={onSelect}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={cn(
          "mt-0.5 size-3.75 shrink-0 rounded-full border-2",
          isSelected
            ? "border-[#1E7A4F] bg-[#1E7A4F]"
            : "border-[#CFC9BA] bg-white",
        )}
      />
      <span className="flex-1">
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-[13.5px] font-bold">{title}</span>
          {tag}
        </span>
        <span className="mt-1 block text-xs leading-normal text-[#6B7A6E]">
          {description}
        </span>
      </span>
    </label>
  );
}
