import { RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import type { JobMatch, TrustLevel } from "@/types/workspace/matches";
import ActionButton from "@/components/shared/ActionButton";
import InitialsTile from "@/components/shared/InitialsTile";
import Pill from "@/components/shared/Pill";

const trustStyles: Record<TrustLevel, { pill: string; note: string }> = {
  verified: { pill: "bg-[#EFF5EF] text-[#1E7A4F]", note: "text-[#1E7A4F]" },
  new: { pill: "bg-[#FFF4E0] text-[#9A6B14]", note: "text-[#9A6B14]" },
  ghost: { pill: "bg-[#FBEAE7] text-[#B4483A]", note: "text-[#B4483A]" },
};

export default function MatchCard({
  match,
  onSkip,
  onQueue,
}: {
  match: JobMatch;
  onSkip: () => void;
  onQueue: () => void;
}) {
  const isActionable = !match.isSkipped && !match.isAutoSkipped;
  const trust = trustStyles[match.trust];

  return (
    <article
      className={cn(
        "rounded-xl border border-[#DED9CC] bg-[#FBFAF7] px-5 py-4.5 transition-[opacity,border-color,box-shadow] hover:border-[#C4BEAE] hover:shadow-[0_3px_16px_-8px_rgba(15,31,22,.22)]",
        match.isSkipped && "opacity-50",
        match.isAutoSkipped && "opacity-62",
      )}
    >
      <div className="flex flex-col gap-3.75 sm:flex-row sm:items-start">
        <InitialsTile
          initials={match.initials}
          color={match.logoColor}
          className="size-11 text-base"
        />

        <div className="min-w-0 flex-1">
          <header className="flex flex-wrap items-center gap-2.5">
            <h2 className="font-heading text-[16.5px] font-semibold">
              {match.role}
            </h2>
            <Pill className={trust.pill}>{match.trustLabel}</Pill>
            {match.sponsorLabel && (
              <span title="From public USCIS H-1B filing data">
                <Pill tone="blue">{match.sponsorLabel}</Pill>
              </span>
            )}
          </header>
          <p className="mt-0.75 text-[12.5px] text-[#4A554C]">
            {match.company} · {match.location} · {match.salary}
          </p>
          <ul
            aria-label="Highlights"
            className="mt-2.25 flex flex-wrap gap-1.5"
          >
            {match.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-sm bg-[#EDEAE0] px-2.25 py-0.75 text-[11px] font-semibold text-[#4A554C]"
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className="mt-2.25 text-xs leading-normal text-[#6B7A6E]">
            <strong className={trust.note}>{match.noteHead}</strong>{" "}
            {match.note}
          </p>
          {match.duplicateNote && (
            <p className="mt-2.25 flex items-center gap-2 rounded-[9px] border border-[#EAD9A8] bg-[#FFF7E6] px-2.75 py-2 text-[11.5px] leading-[1.4] text-[#6B5A22]">
              <RefreshCw aria-hidden="true" className="size-3.5 shrink-0" />
              {match.duplicateNote}
            </p>
          )}
        </div>

        <div className="flex shrink-0 items-center justify-between gap-2.5 sm:flex-col sm:items-end">
          <p className="sm:text-right">
            <span
              className={cn(
                "block font-heading text-2xl font-extrabold tracking-[-0.02em]",
                match.trust === "ghost" ? "text-[#9A9384]" : "text-[#1E7A4F]",
              )}
            >
              {match.match}
            </span>
            <span className="block text-[10.5px] tracking-wider text-[#6B7A6E]">
              MATCH
            </span>
          </p>

          {isActionable && (
            <div className="flex gap-1.75">
              <ActionButton
                variant="light"
                size="sm"
                onClick={onSkip}
                className="rounded-md px-3.25 text-xs font-semibold"
              >
                Skip
              </ActionButton>
              <ActionButton
                size="sm"
                onClick={onQueue}
                className="rounded-md px-3.5 text-xs font-semibold"
              >
                Queue it
              </ActionButton>
            </div>
          )}
          {match.isSkipped && (
            <span className="text-[11.5px] font-semibold text-[#B4483A]">
              Skipped — agent will avoid similar
            </span>
          )}
          {match.isAutoSkipped && (
            <span className="text-[11.5px] font-semibold text-[#B4483A]">
              Auto-skipped
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
