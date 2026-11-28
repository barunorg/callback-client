import { cn } from "@/lib/utils";
import type { QueueMode } from "@/types/workspace/queue";

export default function QueueModeTabs({
  mode,
  isPro,
  onSelect,
}: {
  mode: QueueMode;
  isPro: boolean;
  onSelect: (mode: QueueMode) => void;
}) {
  const tabs: { id: QueueMode; label: string }[] = [
    { id: "each", label: "Approve each" },
    { id: "batch", label: "Batch review" },
    { id: "auto", label: isPro ? "Agent mode" : "Agent mode · PRO" },
  ];

  return (
    <div
      role="group"
      aria-label="How applications go out"
      className="flex flex-wrap gap-0.5 rounded-lg bg-[#E4E0D4] p-0.75"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === mode;

        return (
          <button
            key={tab.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSelect(tab.id)}
            className={cn(
              "rounded-md px-3.5 py-2 text-[12.5px] font-semibold transition-colors",
              isActive
                ? "bg-[#FBFAF7] text-[#141C17] shadow-[0_1px_3px_rgba(0,0,0,.12)]"
                : "text-[#6B7A6E] hover:text-[#141C17]",
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
