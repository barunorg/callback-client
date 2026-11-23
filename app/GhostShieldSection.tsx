import { Check, X } from "lucide-react";
import { ghostShieldChecks, trustReportRows } from "./data/landing-page";

export default function GhostShieldSection() {
  return (
    <section
      id="shield"
      aria-labelledby="ghost-shield-title"
      className="scroll-mt-8 bg-[#0F1F16] text-[#E9EFE9]"
    >
      <div className="mx-auto grid max-w-300 items-center gap-10 px-5 py-14 sm:px-12 sm:py-18 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="mb-3 text-xs font-medium tracking-[0.08em] text-[#F4B942]">
            GHOST SHIELD
          </p>
          <h2
            id="ghost-shield-title"
            className="mb-4 font-heading text-3xl leading-tight font-bold tracking-tight sm:text-[34px]"
          >
            The job board is haunted. We check every listing first.
          </h2>
          <p className="mb-6 max-w-[460px] text-[15px] leading-[1.6] text-white/65">
            Fake postings, evergreen ads, visa-bait, and outright scams waste
            hundreds of hours and prey on international students. Before any job
            reaches you, we verify the company like a suspicious friend would.
          </p>
          <ul className="flex flex-col gap-2.5">
            {ghostShieldChecks.map((check) => (
              <li
                key={check}
                className="flex items-baseline gap-2.5 text-[13.5px] leading-[1.5] text-white/85"
              >
                <Check
                  aria-hidden="true"
                  className="size-4 shrink-0 text-[#8FE388]"
                />
                {check}
              </li>
            ))}
          </ul>
        </div>

        <aside
          aria-label="Example company trust report"
          className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-[22px]"
        >
          <h3 className="mb-4 text-[11px] font-bold tracking-[0.07em] text-white/50">
            TRUST REPORT · NEXORA GLOBAL SOLUTIONS
          </h3>
          <ul className="flex flex-col gap-2.5">
            {trustReportRows.map(({ check, result, severity }) => (
              <li
                key={check}
                className="flex items-center justify-between gap-3 rounded-[10px] bg-white/5 px-3.5 py-3"
              >
                <span className="text-[13px] text-white/80">{check}</span>
                <span
                  className={
                    severity === "high"
                      ? "text-right text-xs font-bold text-[#F2A79A]"
                      : "text-right text-xs font-bold text-[#F4B942]"
                  }
                >
                  {result}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3.5 flex items-start gap-2 rounded-[10px] border border-[#6B2A20] bg-[#3A1A15] px-3.5 py-3 text-[13px] leading-[1.45] font-semibold text-[#F2A79A]">
            <X aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
            Verdict: ghost risk — hidden from your feed. You&apos;ll never waste
            an evening on it.
          </p>
        </aside>
      </div>
    </section>
  );
}
