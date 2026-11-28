"use client";

import type { CareerData, RadarBar } from "@/types/workspace/career";
import ActionButton from "@/components/shared/ActionButton";
import Panel from "@/components/shared/Panel";
import { useToast } from "@/stores/ToastProvider";
import RadarBarCard from "./RadarBarCard";

export default function NextMoveRadarPanel({
  bars,
  summary,
}: {
  bars: RadarBar[];
  summary: CareerData["radarSummary"];
}) {
  const pushToast = useToast();

  function showEditHint() {
    pushToast(
      "Bars are yours: salary, PTO, remote, title, team size — anything the agent can read from a JD",
      { kind: "info" },
    );
  }

  return (
    <Panel
      tone="dark"
      title="Next move radar"
      aside={
        <ActionButton
          variant="onDark"
          size="sm"
          className="px-3.25"
          onClick={showEditHint}
        >
          Edit bars
        </ActionButton>
      }
      description={
        <span className="block max-w-140">
          Your definition of “better.” First job: anything. Next job:{" "}
          <em>your terms</em> — the agent only wakes you when a role clears{" "}
          <strong className="text-[#8FE388]">every bar</strong>.
        </span>
      }
      className="px-5.5"
    >
      <ul className="mb-3.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {bars.map((bar) => (
          <RadarBarCard key={bar.label} bar={bar} />
        ))}
      </ul>
      <p className="text-xs leading-normal text-[#E9EFE9]/65">
        Last quarter: {summary.quietMatches} quiet matches ·{" "}
        <strong className="text-[#E9EFE9]">
          {summary.clearedEveryBar} cleared every bar
        </strong>{" "}
        — both saved to your shortlist. Zero pings, zero FOMO.
      </p>
    </Panel>
  );
}
