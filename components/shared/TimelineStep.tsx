import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TimelineEntry } from "@/types/workspace/common";

export default function TimelineStep({
  state,
  label,
  detail,
  time,
  isLast,
}: TimelineEntry & { isLast: boolean }) {
  return (
    <li className="flex gap-3.25">
      <div aria-hidden="true" className="flex flex-col items-center">
        {state === "done" && (
          <span className="grid size-4.5 shrink-0 place-items-center rounded-full bg-[#1E7A4F] text-white">
            <Check className="size-3" strokeWidth={3} />
          </span>
        )}
        {state === "current" && (
          <span className="grid size-4.5 shrink-0 place-items-center rounded-full bg-[#E9F0F8]">
            <span className="size-2 animate-[ap-pulse_1.6s_infinite] rounded-full bg-[#1E4A7A]" />
          </span>
        )}
        {state === "pending" && (
          <span className="m-0.5 size-3.5 shrink-0 rounded-full border-2 border-[#D8D2C2]" />
        )}
        <span
          className={cn(
            "my-0.75 min-h-3 w-0.5 flex-1",
            isLast ? "bg-transparent" : "bg-[#E0DBCE]",
          )}
        />
      </div>
      <div className="flex-1 pb-3.5">
        <div className="flex flex-wrap justify-between gap-2.5">
          <span
            className={cn(
              "text-[13px] font-bold",
              state === "pending" ? "text-[#9A9384]" : "text-[#141C17]",
            )}
          >
            {label}
          </span>
          <span className="shrink-0 text-[11px] text-[#9A9384]">{time}</span>
        </div>
        <p className="mt-0.75 text-xs leading-normal text-[#6B7A6E]">
          {detail}
        </p>
      </div>
    </li>
  );
}
