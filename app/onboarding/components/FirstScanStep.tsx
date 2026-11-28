"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FIRST_SCAN_STEPS } from "../constants/onboardingOptions";
import ProgressRow, { type ProgressState } from "./ProgressRow";

const SCAN_TICK_MS = 620;

const resultClasses = {
  neutral: "font-bold text-[#4A554C]",
  red: "font-bold text-[#B4483A]",
  green: "font-bold text-[#1E7A4F]",
};

/** Finale: the first sweep runs line by line, then links to the queue. */
export default function FirstScanStep() {
  const [scanIndex, setScanIndex] = useState(0);
  const isDone = scanIndex >= FIRST_SCAN_STEPS.length;

  useEffect(() => {
    if (isDone) return;
    const timer = setTimeout(
      () => setScanIndex((index) => index + 1),
      SCAN_TICK_MS,
    );
    return () => clearTimeout(timer);
  }, [isDone, scanIndex]);

  function stateOf(index: number): ProgressState {
    if (index < scanIndex) return "done";
    return index === scanIndex ? "active" : "pending";
  }

  return (
    <section
      aria-labelledby="onboarding-step-title"
      className="pt-3 text-center"
    >
      <p
        className={cn(
          "mb-4.5 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11.5px] font-bold tracking-wider",
          isDone
            ? "border-[#A9C9AF] bg-[#EFF5EF] text-[#1E7A4F]"
            : "border-[#CFC9BA] text-[#4A554C]",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "size-1.75 rounded-full bg-[#1E7A4F]",
            !isDone && "animate-[ap-pulse_1.6s_infinite]",
          )}
        />
        {isDone ? "✓ FIRST SCAN COMPLETE" : "FIRST SCAN RUNNING"}
      </p>
      <h1
        id="onboarding-step-title"
        className="mb-2 font-heading text-[30px] font-extrabold tracking-[-0.03em] sm:text-4xl"
      >
        Your agent is on the clock.
      </h1>
      <p className="mb-7 text-[14.5px] text-[#4A554C]">
        This first pass takes about a minute. Every future sweep runs on its
        own, every hour.
      </p>

      <div className="mx-auto max-w-130 rounded-2xl border border-[#DED9CC] bg-[#FBFAF7] px-6 py-5.5 text-left">
        <ul aria-live="polite" className="flex flex-col gap-3">
          {FIRST_SCAN_STEPS.map((step, index) => (
            <ProgressRow
              key={step.label}
              state={stateOf(index)}
              label={step.label}
              result={step.result}
              resultClassName={resultClasses[step.tone]}
            />
          ))}
        </ul>
      </div>

      {isDone && (
        <div className="mx-auto mt-3.5 max-w-130 rounded-2xl bg-[#0F1F16] px-6 py-5.5 text-left text-[#E9EFE9]">
          <p className="font-heading text-[19px] font-bold tracking-[-0.01em]">
            23 strong matches ·{" "}
            <span className="text-[#8FE388]">3 ready-to-send drafts</span>
          </p>
          <p className="mt-1.25 text-[12.5px] leading-normal text-[#E9EFE9]/65">
            Resumes tailored, recruiter emails found and verified. They&apos;re
            waiting in your review queue — nothing sends until you approve.
          </p>
          <Link
            href="/queue/"
            className="mt-4 block rounded-[11px] bg-[#8FE388] p-3.5 text-center text-sm font-extrabold text-[#0F1F16] transition-colors hover:bg-[#A7F2A0]"
          >
            Review your first 3 applications →
          </Link>
        </div>
      )}
    </section>
  );
}
