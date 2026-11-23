"use client";

import * as workspaceApi from "@/lib/api/workspaceApi";
import type { InterviewPrep } from "@/types/workspace/tracker";
import ActionButton from "@/components/shared/ActionButton";
import Modal from "@/components/shared/Modal";
import ModalHeader from "@/components/shared/ModalHeader";
import { usePlan } from "@/stores/PlanProvider";
import { useToast } from "@/stores/ToastProvider";

export default function InterviewPrepModal({
  prep,
  onClose,
}: {
  prep: InterviewPrep;
  onClose: () => void;
}) {
  const pushToast = useToast();
  const { isPro, openUpgrade } = usePlan();

  async function holdSlot() {
    await workspaceApi.holdInterviewSlot();
    pushToast("Thursday 3:30 PM held · prep reminder Wednesday 6 PM", {
      kind: "info",
    });
  }

  function startMockInterview() {
    if (!isPro) {
      openUpgrade("AI MOCK INTERVIEWS ARE A PRO FEATURE");
      return;
    }
    pushToast(
      "Mock interview room opening — questions from their JD are loaded",
      { kind: "info" },
    );
  }

  return (
    <Modal
      labelledBy="interview-prep-title"
      onClose={onClose}
      className="max-w-175 sm:px-7.5 sm:py-7"
    >
      <ModalHeader
        titleId="interview-prep-title"
        eyebrow="AUTO-GENERATED · YOUR RESUME × THEIR JD"
        eyebrowClassName="text-[#1E7A4F]"
        title={`Interview prep — ${prep.company}`}
        subtitle={prep.meta}
        onClose={onClose}
      />

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <section
          aria-labelledby="prep-questions-title"
          className="rounded-[13px] border border-[#E6E1D5] bg-white px-4.5 py-4"
        >
          <h3
            id="prep-questions-title"
            className="mb-2.75 text-[10.5px] font-extrabold tracking-[0.06em] text-[#6B7A6E]"
          >
            LIKELY QUESTIONS — FROM THE JD
          </h3>
          <ul className="flex flex-col gap-2.25">
            {prep.questions.map((question) => (
              <li
                key={question}
                className="flex gap-2 text-[12.5px] leading-normal"
              >
                <span
                  aria-hidden="true"
                  className="font-extrabold text-[#1E7A4F]"
                >
                  Q
                </span>
                <span>{question}</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="prep-stories-title"
          className="rounded-[13px] border border-[#E6E1D5] bg-white px-4.5 py-4"
        >
          <h3
            id="prep-stories-title"
            className="mb-2.75 text-[10.5px] font-extrabold tracking-[0.06em] text-[#6B7A6E]"
          >
            YOUR STORIES — TELL THESE
          </h3>
          <ul className="flex flex-col gap-2.5">
            {prep.stories.map((story) => (
              <li key={story.title}>
                <p className="text-[12.5px] font-semibold">{story.title}</p>
                <p className="mt-0.5 text-[10.5px] text-[#9A9384]">
                  {story.source}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <p className="mt-3 rounded-[13px] border border-[#EAD9A8] bg-[#FFF7E6] px-4 py-3.25 text-[12.5px] leading-[1.55] text-[#6B5A22]">
        <strong>Gap to brush up:</strong> {prep.gap}
      </p>
      <p className="mt-3 rounded-[13px] bg-[#F3F1E9] px-4 py-3.25 text-[12.5px] leading-[1.55] text-[#4A554C]">
        <strong>About them:</strong> {prep.about}
      </p>

      <div className="mt-4.5 flex flex-col gap-2.5 sm:flex-row">
        <ActionButton
          variant="light"
          size="lg"
          className="flex-1"
          onClick={holdSlot}
        >
          {prep.holdSlotLabel}
        </ActionButton>
        <ActionButton
          size="lg"
          className="flex-[1.4] font-extrabold"
          onClick={startMockInterview}
        >
          Mock interview with AI · PRO
        </ActionButton>
      </div>
    </Modal>
  );
}
