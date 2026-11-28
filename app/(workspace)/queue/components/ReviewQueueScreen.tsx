"use client";

import { useSuspenseQueries } from "@tanstack/react-query";
import {
  parseAsBoolean,
  parseAsInteger,
  parseAsStringLiteral,
  useQueryState,
} from "nuqs";
import { useState } from "react";
import * as workspaceApi from "@/lib/api/workspaceApi";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import type { QueueJob, QueueMode } from "@/types/workspace/queue";
import PageHeading from "@/components/shared/PageHeading";
import { usePlan } from "@/stores/PlanProvider";
import { useToast } from "@/stores/ToastProvider";
import { useQueueActions } from "../hooks/useQueueActions";
import AgentModeBanner from "./AgentModeBanner";
import ApplicationDetail from "./ApplicationDetail";
import BatchBanner from "./BatchBanner";
import QueueEmptyState from "./QueueEmptyState";
import QueueListItem from "./QueueListItem";
import QueueModeTabs from "./QueueModeTabs";
import ResumeEditorModal from "./ResumeEditorModal";

const queueModes = [
  "each",
  "batch",
  "auto",
] as const satisfies readonly QueueMode[];

export default function ReviewQueueScreen() {
  const [{ data: queue }] = useSuspenseQueries({
    queries: [workspaceQueries.queue, workspaceQueries.account],
  });
  const pushToast = useToast();
  const { isPro, sentToday, openUpgrade } = usePlan();
  const { approveJob, discardJob, approveAll, isBusy } = useQueueActions();

  // URL state: ?mode=batch&job=2&referral=true (shareable, survives reloads).
  const [mode, setMode] = useQueryState(
    "mode",
    parseAsStringLiteral(queueModes).withDefault("each"),
  );
  const [selectedJobId, setSelectedJobId] = useQueryState(
    "job",
    parseAsInteger,
  );
  const [isReferral, setIsReferral] = useQueryState(
    "referral",
    parseAsBoolean.withDefault(false),
  );

  const [isEnhanced, setIsEnhanced] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  // Resume edits the student undid, per job id.
  const [undoneEdits, setUndoneEdits] = useState<Record<number, number[]>>({});

  const activeMode = mode === "auto" && !isPro ? "each" : mode;
  const selectedJob = queue.find((job) => job.id === selectedJobId) ?? queue[0];
  const isReferralOn = isReferral && Boolean(selectedJob?.warmPath);
  const selectedUndoneEdits = selectedJob
    ? (undoneEdits[selectedJob.id] ?? [])
    : [];

  function selectMode(nextMode: QueueMode) {
    if (nextMode === "auto" && !isPro) {
      openUpgrade("AGENT MODE IS A PRO FEATURE");
      return;
    }
    setMode(nextMode);
  }

  function selectJob(job: QueueJob) {
    setSelectedJobId(job.id);
    setIsReferral(null);
  }

  function toggleEnhance() {
    if (!isPro) {
      openUpgrade("AI ENHANCE IS A PRO FEATURE");
      return;
    }
    setIsEnhanced((isOn) => !isOn);
  }

  function toggleReferral(job: QueueJob) {
    const isOn = !isReferralOn;
    setIsReferral(isOn);
    pushToast(
      isOn
        ? `Referral draft loaded — goes to ${job.warmPath?.name}, not the recruiter`
        : "Back to the direct application",
      { kind: "info" },
    );
  }

  function toggleEdit(job: QueueJob, index: number) {
    setUndoneEdits((current) => {
      const undone = current[job.id] ?? [];
      return {
        ...current,
        [job.id]: undone.includes(index)
          ? undone.filter((editIndex) => editIndex !== index)
          : [...undone, index],
      };
    });
  }

  async function previewPdf(job: QueueJob) {
    await workspaceApi.previewResumePdf(job.id);
    pushToast("PDF preview rebuilt — opens in a new tab", { kind: "info" });
  }

  async function saveTailoring(job: QueueJob) {
    const keptEdits = job.edits
      .map((_, index) => index)
      .filter((index) => !selectedUndoneEdits.includes(index));
    await workspaceApi.saveResumeTailoring(job.id, keptEdits);
    setIsEditorOpen(false);
    pushToast("Tailoring saved — the send will use this version");
  }

  return (
    <div className="max-w-280">
      <PageHeading
        eyebrow="✦ TAILORED & WAITING ON YOU"
        title="Ready to send"
        description="Resume tailored, recruiter dug up, message written. Read it, tweak it if you want — then you just say go."
        action={
          <QueueModeTabs
            mode={activeMode}
            isPro={isPro}
            onSelect={selectMode}
          />
        }
      />

      {activeMode === "batch" && queue.length > 0 && (
        <BatchBanner
          count={queue.length}
          isBusy={isBusy}
          onApproveAll={() => approveAll(queue)}
        />
      )}
      {activeMode === "auto" && <AgentModeBanner />}

      {queue.length === 0 ? (
        <QueueEmptyState sentToday={sentToday} />
      ) : (
        <div className="grid grid-cols-1 items-start gap-3.5 xl:grid-cols-[minmax(230px,300px)_minmax(0,1fr)]">
          <ul
            aria-label="Applications awaiting approval"
            className="flex flex-col gap-2"
          >
            {queue.map((job) => (
              <QueueListItem
                key={job.id}
                job={job}
                isPro={isPro}
                isSelected={job.id === selectedJob.id}
                onSelect={() => selectJob(job)}
              />
            ))}
          </ul>

          <ApplicationDetail
            job={selectedJob}
            isPro={isPro}
            isReferralOn={isReferralOn}
            isEnhanceOn={isPro && isEnhanced}
            isBusy={isBusy}
            onApprove={() => approveJob(selectedJob)}
            onDiscard={() => discardJob(selectedJob)}
            onToggleEnhance={toggleEnhance}
            onToggleReferral={() => toggleReferral(selectedJob)}
            onOpenEditor={() => setIsEditorOpen(true)}
            onUnlockCallback={() =>
              openUpgrade("CALLBACK PREDICTION IS A PRO FEATURE")
            }
          />
        </div>
      )}

      {isEditorOpen && queue.length > 0 && (
        <ResumeEditorModal
          job={selectedJob}
          undoneEdits={selectedUndoneEdits}
          onToggleEdit={(index) => toggleEdit(selectedJob, index)}
          onPreviewPdf={() => previewPdf(selectedJob)}
          onSave={() => saveTailoring(selectedJob)}
          onClose={() => setIsEditorOpen(false)}
        />
      )}
    </div>
  );
}
