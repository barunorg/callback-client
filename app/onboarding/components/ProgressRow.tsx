import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProgressState = "done" | "active" | "pending";

/** One line of a running task: tick when done, spinner while active. */
export default function ProgressRow({
  state,
  label,
  result,
  resultClassName,
}: {
  state: ProgressState;
  label: string;
  result: string;
  resultClassName?: string;
}) {
  return (
    <li
      className={cn(
        "flex items-center gap-2.75 transition-opacity duration-300",
        state === "pending" && "opacity-45",
      )}
    >
      {state === "done" && (
        <span className="grid size-4.5 shrink-0 place-items-center rounded-full bg-[#1E7A4F] text-white">
          <Check aria-hidden="true" strokeWidth={3} className="size-3" />
        </span>
      )}
      {state === "active" && (
        <span
          aria-hidden="true"
          className="m-0.5 size-3.5 shrink-0 animate-[spin_0.7s_linear_infinite] rounded-full border-2 border-[#CFC9BA] border-t-[#1E7A4F]"
        />
      )}
      {state === "pending" && (
        <span
          aria-hidden="true"
          className="m-0.5 size-3.5 shrink-0 rounded-full border-2 border-[#D8D2C2]"
        />
      )}
      <span className="flex-1 text-[13px] font-semibold text-[#2A342C]">
        {label}
      </span>
      {state === "done" && (
        <span className={cn("text-xs text-[#6B7A6E]", resultClassName)}>
          {result}
        </span>
      )}
    </li>
  );
}
