import { cn } from "@/lib/utils";
import {
  noteBackgroundClasses,
  noteTextClasses,
} from "@/lib/constants/toneClasses";
import type { TrackerCard as TrackerCardData } from "@/types/workspace/tracker";
import ActionButton from "@/components/shared/ActionButton";

/**
 * The whole card opens the journey: the title button stretches over the card
 * (`after:inset-0`), and the prep button sits above it so buttons never nest.
 */
export default function TrackerCard({
  card,
  onOpenJourney,
  onOpenPrep,
}: {
  card: TrackerCardData;
  onOpenJourney: () => void;
  onOpenPrep: () => void;
}) {
  return (
    <article className="relative rounded-[11px] border border-[#DED9CC] bg-[#FBFAF7] px-3.25 py-3 transition-colors hover:border-[#B8B19E] hover:bg-white">
      <h3 className="text-[13px] font-bold">
        <button
          type="button"
          aria-haspopup="dialog"
          aria-label={`${card.role} at ${card.company} — view application journey`}
          onClick={onOpenJourney}
          className="text-left after:absolute after:inset-0 after:rounded-[11px] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-[#141C17]/30"
        >
          {card.role}
        </button>
      </h3>
      <p className="mt-0.5 text-[11.5px] text-[#6B7A6E]">
        {card.company} · {card.age}
      </p>

      {card.note && (
        <p
          className={cn(
            "mt-2 rounded-[7px] px-2.25 py-1.5 text-[11.5px] leading-[1.4] font-semibold",
            noteBackgroundClasses[card.noteTone ?? "neutral"],
            noteTextClasses[card.noteTone ?? "neutral"],
          )}
        >
          {card.note}
        </p>
      )}

      {card.hasPrep && (
        <ActionButton
          size="sm"
          aria-haspopup="dialog"
          className="relative z-10 mt-2 w-full rounded-md px-2.5 py-2"
          onClick={onOpenPrep}
        >
          Open interview prep →
        </ActionButton>
      )}

      <p className="mt-2 text-[10.5px] text-[#9A9384]">
        {card.stage} · tap for journey
      </p>
    </article>
  );
}
