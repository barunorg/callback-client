"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import PageHeading from "@/components/shared/PageHeading";
import Pill from "@/components/shared/Pill";
import NegotiationCopilotPanel from "./NegotiationCopilotPanel";
import NextMoveRadarPanel from "./NextMoveRadarPanel";
import StandbyAgentPanel from "./StandbyAgentPanel";
import VisaClockPanel from "./VisaClockPanel";

export default function CareerModeScreen() {
  const { data: career } = useSuspenseQuery(workspaceQueries.career);

  return (
    <div className="max-w-230">
      <PageHeading
        descriptionClassName="max-w-160"
        title="Career mode"
        titleBadge={
          <Pill
            tone="amber"
            className="border border-[#EAD9A8] px-2.75 py-1.25 text-[10px] font-extrabold tracking-[0.06em]"
          >
            PREVIEW — ACTIVATES THE DAY YOU SIGN
          </Pill>
        }
        description="The offer isn’t the finish line — for you it’s barely halftime. The agent stays on: guarding the visa clock, watching for something better, and quietly opening the door for the student behind you."
      />

      <div className="flex flex-col gap-3.5">
        <VisaClockPanel timeline={career.visaTimeline} />
        <NextMoveRadarPanel
          bars={career.radarBars}
          summary={career.radarSummary}
        />
        <StandbyAgentPanel
          isStandbyOn={career.isStandbyOn}
          watchlist={career.watchlist}
          digest={career.standbyDigest}
        />
        <NegotiationCopilotPanel negotiation={career.negotiation} />
      </div>
    </div>
  );
}
