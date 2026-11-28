import { cn } from "@/lib/utils";
import type { QueueJob } from "@/types/workspace/queue";

export default function QueueListItem({
  job,
  isPro,
  isSelected,
  onSelect,
}: {
  job: QueueJob;
  isPro: boolean;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        aria-current={isSelected ? "true" : undefined}
        onClick={onSelect}
        className={cn(
          "w-full border-[1.5px] px-3.75 py-3.25 text-left transition-colors",
          isSelected
            ? "rounded-l-sm rounded-r-xl border-[#141C17] border-l-4 border-l-[#B4762A] bg-white"
            : "rounded-[12px] border-[#E0DBCE] bg-[#F3F1E9] hover:bg-white",
        )}
      >
        <span className="flex items-center justify-between gap-2">
          <span className="text-[13.5px] font-bold">{job.role}</span>
          <span className="font-mono text-xs font-bold">{job.match}</span>
        </span>
        <span className="mt-0.5 block text-xs text-[#6B7A6E]">
          {job.company} · via {job.channel}
        </span>
        <span
          className={cn(
            "mt-1.25 block text-[11px] font-semibold",
            job.isUrgent ? "text-[#B4483A]" : "text-[#6B7A6E]",
          )}
        >
          {job.deadline}
        </span>
        <span className="mt-1.75 flex flex-wrap items-center gap-1.5">
          {isPro ? (
            <span className="rounded-sm bg-[#E9F0F8] px-2 py-0.75 text-[10.5px] font-bold text-[#1E4A7A]">
              ~{job.callbackChance} callback chance
            </span>
          ) : (
            <span className="rounded-sm bg-[#EDEAE0] px-2 py-0.75 text-[10.5px] font-semibold text-[#9A9384]">
              callback est. · Pro
            </span>
          )}
          {job.warmPath && (
            <span className="rounded-sm bg-[#E9F0F8] px-2 py-0.75 text-[10.5px] font-bold text-[#1E4A7A]">
              warm path
            </span>
          )}
        </span>
      </button>
    </li>
  );
}
