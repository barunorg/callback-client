"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SetupStep } from "@/types/workspace/profile";
import { useToast } from "@/stores/ToastProvider";

export default function SetupStepRow({
  step,
  stepNumber,
}: {
  step: SetupStep;
  stepNumber: number;
}) {
  const pushToast = useToast();

  function addNow() {
    pushToast(
      "Paste a cover letter you wrote — messages will start sounding like you",
      { kind: "info" },
    );
  }

  return (
    <li className="flex items-center gap-3.5 rounded-[13px] border border-[#DED9CC] bg-[#FBFAF7] px-4.5 py-4">
      <span
        aria-hidden="true"
        className={cn(
          "grid size-7 shrink-0 place-items-center rounded-full text-[13px] font-bold",
          step.isDone
            ? "bg-[#1E7A4F] text-white"
            : "bg-[#EDEAE0] text-[#6B7A6E]",
        )}
      >
        {step.isDone ? (
          <Check strokeWidth={3} className="size-3.5" />
        ) : (
          stepNumber
        )}
      </span>
      <div className="min-w-0 flex-1">
        <h2 className="text-sm font-bold">{step.title}</h2>
        <p className="mt-0.5 text-xs text-[#6B7A6E]">{step.detail}</p>
      </div>
      {step.isDone ? (
        <span className="shrink-0 text-xs font-bold text-[#1E7A4F]">Done</span>
      ) : (
        <button
          type="button"
          onClick={addNow}
          className="shrink-0 text-xs font-bold text-[#B4762A] hover:underline"
        >
          Add now
        </button>
      )}
    </li>
  );
}
