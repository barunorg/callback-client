import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * On/off pill. `select` marks chosen options with a tick (roles, locations);
 * `exclude` strikes through switched-off ones (skills).
 */
export default function ToggleChip({
  label,
  isOn,
  variant = "select",
  onToggle,
}: {
  label: string;
  isOn: boolean;
  variant?: "select" | "exclude";
  onToggle: () => void;
}) {
  const isExclude = variant === "exclude";

  return (
    <button
      type="button"
      aria-pressed={isOn}
      onClick={onToggle}
      className={cn(
        "inline-flex items-center gap-1 rounded-full text-[12.5px] transition-colors",
        isExclude
          ? "border px-3.5 py-1.75 font-semibold"
          : "border-[1.5px] px-3.75 py-2 font-bold",
        isOn
          ? "border-[#141C17] bg-[#141C17] text-white"
          : isExclude
            ? "border-[#E0DBCE] bg-[#F3F1E9] text-[#9A9384] line-through"
            : "border-[#CFC9BA] bg-white text-[#6B7A6E] hover:border-[#B8B19E]",
      )}
    >
      {isOn && !isExclude && (
        <Check aria-hidden="true" strokeWidth={3} className="size-3.5" />
      )}
      {label}
    </button>
  );
}
