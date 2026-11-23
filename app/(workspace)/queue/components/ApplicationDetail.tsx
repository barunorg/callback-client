import { PenLine } from "lucide-react";
import type { QueueJob } from "@/types/workspace/queue";
import ActionButton from "@/components/shared/ActionButton";
import CallbackPrediction from "./CallbackPrediction";
import RecruiterMessage from "./RecruiterMessage";
import ScreeningQuestions from "./ScreeningQuestions";
import TailoringPanel from "./TailoringPanel";
import WarmPathCard from "./WarmPathCard";

export default function ApplicationDetail({
  job,
  isPro,
  isReferralOn,
  isEnhanceOn,
  isBusy,
  onApprove,
  onDiscard,
  onToggleEnhance,
  onToggleReferral,
  onOpenEditor,
  onUnlockCallback,
}: {
  job: QueueJob;
  isPro: boolean;
  isReferralOn: boolean;
  isEnhanceOn: boolean;
  isBusy: boolean;
  onApprove: () => void;
  onDiscard: () => void;
  onToggleEnhance: () => void;
  onToggleReferral: () => void;
  onOpenEditor: () => void;
  onUnlockCallback: () => void;
}) {
  const warmPath = isReferralOn ? job.warmPath : undefined;
  const recipientEmail = warmPath?.email ?? job.email;
  const recipientNote = warmPath?.note ?? job.emailNote;
  const message =
    warmPath?.message ??
    (isEnhanceOn && job.enhancedMessage ? job.enhancedMessage : job.message);

  return (
    <article className="overflow-hidden rounded-xl border border-[#DED9CC] bg-[#FBFAF7]">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E6E1D5] px-5.5 py-4.5">
        <div className="min-w-0">
          <h2 className="font-heading text-lg font-bold">
            {job.role} — {job.company}
          </h2>
          <p className="mt-0.75 text-xs wrap-break-word text-[#6B7A6E]">
            To: <strong className="text-[#141C17]">{recipientEmail}</strong> ·{" "}
            {recipientNote}
          </p>
          <p className="mt-1.25 flex items-center gap-1.5 text-[11.5px] text-[#8A6D2A] italic">
            <PenLine aria-hidden="true" className="size-3.5 shrink-0" />
            Found this one on the company careers page, not a job board — fewer
            applicants competing.
          </p>
        </div>
        <div className="flex gap-2">
          <ActionButton
            variant="light"
            disabled={isBusy}
            onClick={onDiscard}
            className="font-semibold"
          >
            Discard
          </ActionButton>
          <ActionButton
            variant="green"
            disabled={isBusy}
            onClick={onApprove}
            className="px-4.25"
          >
            Approve &amp; send
          </ActionButton>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <RecruiterMessage
          message={message}
          enhanceState={isPro ? (isEnhanceOn ? "ON" : "OFF") : "PRO"}
          isEnhanceOn={isEnhanceOn}
          onToggleEnhance={onToggleEnhance}
        />

        <div className="px-5.5 py-4.5">
          <TailoringPanel
            changes={job.changes}
            verify={job.verify}
            onOpenEditor={onOpenEditor}
          />
          {job.screening && <ScreeningQuestions answers={job.screening} />}
          <CallbackPrediction
            isPro={isPro}
            chance={job.callbackChance}
            note={job.callbackNote}
            onUnlock={onUnlockCallback}
          />
          {job.warmPath && (
            <WarmPathCard
              warmPath={job.warmPath}
              isOn={isReferralOn}
              onToggle={onToggleReferral}
            />
          )}
        </div>
      </div>
    </article>
  );
}
