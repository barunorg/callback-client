import type { TrackerCard } from "@/types/workspace/tracker";
import ActionButton from "@/components/shared/ActionButton";
import Modal from "@/components/shared/Modal";
import ModalHeader from "@/components/shared/ModalHeader";
import TimelineStep from "@/components/shared/TimelineStep";

export default function JourneyModal({
  card,
  onClose,
  onOpenPrep,
}: {
  card: TrackerCard;
  onClose: () => void;
  onOpenPrep: () => void;
}) {
  return (
    <Modal labelledBy="journey-title" onClose={onClose} className="max-w-140">
      <ModalHeader
        titleId="journey-title"
        eyebrow="APPLICATION JOURNEY — LIKE PACKAGE TRACKING, FOR YOUR RESUME"
        title={`${card.role} — ${card.company}`}
        subtitle={
          <>
            Current stage:{" "}
            <strong className="text-[#141C17]">{card.stage}</strong>
          </>
        }
        onClose={onClose}
      />

      <ol className="mt-5">
        {card.journey.map((step, index) => (
          <TimelineStep
            key={step.label}
            {...step}
            isLast={index === card.journey.length - 1}
          />
        ))}
      </ol>

      {card.hasPrep && (
        <ActionButton
          size="lg"
          className="w-full font-extrabold"
          onClick={onOpenPrep}
        >
          Open interview prep →
        </ActionButton>
      )}
    </Modal>
  );
}
