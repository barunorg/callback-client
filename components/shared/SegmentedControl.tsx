import { cn } from "@/lib/utils";

/** Pill-style single choice (e.g. "Internships / New grad / Both"). */
export default function SegmentedControl<T extends string | number>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className="inline-flex flex-wrap gap-0.5 rounded-[10px] bg-[#E4E0D4] p-0.75"
    >
      {options.map((option) => {
        const isSelected = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-lg px-4 py-2 text-[12.5px] font-semibold transition-colors",
              isSelected
                ? "bg-[#FBFAF7] text-[#141C17] shadow-[0_1px_3px_rgba(0,0,0,.12)]"
                : "text-[#6B7A6E] hover:text-[#141C17]",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
