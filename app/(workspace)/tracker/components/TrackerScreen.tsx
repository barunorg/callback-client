"use client";

import { useSuspenseQueries } from "@tanstack/react-query";
import { useState } from "react";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import type { TrackerCard } from "@/types/workspace/tracker";
import PageHeading from "@/components/shared/PageHeading";
import InterviewPrepModal from "./InterviewPrepModal";
import JourneyModal from "./JourneyModal";
import TrackerColumn from "./TrackerColumn";

export default function TrackerScreen() {
  const [{ data: columns }, { data: interviewPrep }] = useSuspenseQueries({
    queries: [workspaceQueries.tracker, workspaceQueries.interviewPrep],
  });
  const [journeyCard, setJourneyCard] = useState<TrackerCard | null>(null);
  const [isPrepOpen, setIsPrepOpen] = useState(false);

  function openPrepFromJourney() {
    setJourneyCard(null);
    setIsPrepOpen(true);
  }

  return (
    <div>
      <PageHeading
        eyebrow="◷ WHERE EVERYTHING STANDS"
        title="Tracker"
        description="Every application, every reply — and a polite nudge sent automatically when one goes quiet. Tap any card to see how far it actually reached."
      />

      <div className="grid grid-cols-1 items-start gap-3.5 md:grid-cols-2 xl:grid-cols-4">
        {columns.map((column) => (
          <TrackerColumn
            key={column.id}
            column={column}
            onOpenJourney={setJourneyCard}
            onOpenPrep={() => setIsPrepOpen(true)}
          />
        ))}
      </div>

      {journeyCard && (
        <JourneyModal
          card={journeyCard}
          onClose={() => setJourneyCard(null)}
          onOpenPrep={openPrepFromJourney}
        />
      )}
      {isPrepOpen && (
        <InterviewPrepModal
          prep={interviewPrep}
          onClose={() => setIsPrepOpen(false)}
        />
      )}
    </div>
  );
}
