"use client";

import type { QueueJob } from "@/types/workspace/queue";
import ActionButton from "@/components/shared/ActionButton";
import Modal from "@/components/shared/Modal";
import ModalHeader from "@/components/shared/ModalHeader";
import ResumeEditRow from "./ResumeEditRow";

export default function ResumeEditorModal({
  job,
  undoneEdits,
  onToggleEdit,
  onPreviewPdf,
  onSave,
  onClose,
}: {
  job: QueueJob;
  undoneEdits: number[];
  onToggleEdit: (index: number) => void;
  onPreviewPdf: () => void;
  onSave: () => void;
  onClose: () => void;
}) {
  const keptCount = job.edits.length - undoneEdits.length;
  const { matched, total, missing } = job.keywords;
  const coveragePercent = Math.round((matched / total) * 100);

  return (
    <Modal
      labelledBy="resume-editor-title"
      onClose={onClose}
      className="max-w-170"
    >
      <ModalHeader
        titleId="resume-editor-title"
        eyebrow="RESUME TAILORING EDITOR · v3 FOR THIS JOB"
        title={`${job.role} — ${job.company}`}
        subtitle="Your master resume stays untouched — this builds a per-job copy. Undo anything."
        onClose={onClose}
      />

      <ol aria-label="Resume changes" className="mt-4.5 flex flex-col gap-2.5">
        {job.edits.map((edit, index) => (
          <ResumeEditRow
            key={`${edit.kind}-${edit.after}`}
            edit={edit}
            isKept={!undoneEdits.includes(index)}
            onToggle={() => onToggleEdit(index)}
          />
        ))}
      </ol>

      <section
        aria-labelledby="keyword-coverage-title"
        className="mt-4 rounded-[12px] border border-[#E6E1D5] bg-white px-4.25 py-3.75"
      >
        <div className="mb-2 flex justify-between gap-3 text-xs">
          <h3 id="keyword-coverage-title" className="font-bold">
            JD keyword coverage
          </h3>
          <span className="font-extrabold text-[#1E7A4F]">
            {matched} of {total} covered
          </span>
        </div>
        <div
          aria-hidden="true"
          className="mb-2.5 h-1.75 overflow-hidden rounded-full bg-[#EDEAE0]"
        >
          <div
            className="h-full rounded-full bg-[#1E7A4F]"
            style={{ width: `${coveragePercent}%` }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-semibold text-[#6B7A6E]">
            Not covered:
          </span>
          {missing.map((keyword) => (
            <span
              key={keyword}
              className="rounded-full bg-[#FBEAE7] px-2.25 py-0.75 text-[11px] font-semibold text-[#B4483A]"
            >
              {keyword}
            </span>
          ))}
        </div>
        <p className="mt-2.25 text-[11px] leading-normal text-[#9A9384]">
          Real gaps stay visible — we never keyword-stuff. Recruiters can tell.
        </p>
      </section>

      <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
        <ActionButton
          variant="light"
          size="lg"
          onClick={onPreviewPdf}
          className="flex-1"
        >
          Preview PDF
        </ActionButton>
        <ActionButton
          size="lg"
          onClick={onSave}
          className="flex-[1.4] font-extrabold"
        >
          Save tailoring — {keptCount} changes kept
        </ActionButton>
      </div>
    </Modal>
  );
}
