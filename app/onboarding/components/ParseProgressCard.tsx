"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { ParsedResume } from "@/types/onboarding";
import ProgressRow, { type ProgressState } from "./ProgressRow";

const PARSE_TICK_MS = 480;

/** Resume file + the parser's progress lines, ticking until parsed. */
export default function ParseProgressCard({
  file,
  stepLabels,
  summary,
  isParsed,
}: {
  file: File;
  stepLabels: string[];
  summary?: ParsedResume["summary"];
  isParsed: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isParsed) return;
    const timer = setInterval(() => {
      setActiveIndex((index) => Math.min(index + 1, stepLabels.length - 1));
    }, PARSE_TICK_MS);
    return () => clearInterval(timer);
  }, [isParsed, stepLabels.length]);

  function stateOf(index: number): ProgressState {
    if (isParsed || index < activeIndex) return "done";
    return index === activeIndex ? "active" : "pending";
  }

  const fileSizeKb = Math.max(1, Math.round(file.size / 1024));

  return (
    <section
      aria-live="polite"
      className="rounded-2xl border border-[#DED9CC] bg-[#FBFAF7] px-5.5 py-5"
    >
      <header className="mb-4 flex items-center gap-3 border-b border-[#EFECE4] pb-4">
        <span className="grid size-9.5 shrink-0 place-items-center rounded-[10px] bg-[#B4483A] text-[10px] font-extrabold tracking-[0.04em] text-white">
          PDF
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13.5px] font-bold">{file.name}</p>
          <p className="text-[11.5px] text-[#6B7A6E]">
            {fileSizeKb} KB · uploaded just now
          </p>
        </div>
        <span
          className={cn(
            "text-[11.5px] font-bold",
            isParsed ? "text-[#1E7A4F]" : "text-[#B4762A]",
          )}
        >
          {isParsed ? "PARSED ✓" : "PARSING…"}
        </span>
      </header>
      <ul className="flex flex-col gap-2.75">
        {stepLabels.map((label, index) => (
          <ProgressRow
            key={label}
            state={stateOf(index)}
            label={label}
            result={summary?.find((row) => row.label === label)?.found ?? ""}
          />
        ))}
      </ul>
      {isParsed && (
        <p className="mt-4 rounded-[10px] bg-[#EFF5EF] px-3.5 py-3 text-[12.5px] leading-normal text-[#2A5A3E]">
          Nice resume. You&apos;ll confirm every detail on the next step — we
          never guess silently.
        </p>
      )}
    </section>
  );
}
