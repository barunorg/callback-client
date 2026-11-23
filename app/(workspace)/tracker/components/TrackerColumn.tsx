import { cn } from "@/lib/utils";
import type {
  TrackerCard as TrackerCardData,
  TrackerColumn as TrackerColumnData,
} from "@/types/workspace/tracker";
import TrackerCard from "./TrackerCard";

export default function TrackerColumn({
  column,
  onOpenJourney,
  onOpenPrep,
}: {
  column: TrackerColumnData;
  onOpenJourney: (card: TrackerCardData) => void;
  onOpenPrep: () => void;
}) {
  const { isHighlighted } = column;

  return (
    <section
      aria-labelledby={`tracker-column-${column.id}`}
      className={cn(
        "rounded-xl border p-3",
        isHighlighted
          ? "border-[#12281C] bg-[#12281C]"
          : "border-transparent bg-[#E9E5D9]",
      )}
    >
      <header className="flex items-center justify-between px-1.5 pt-0.5 pb-2.5">
        <h2
          id={`tracker-column-${column.id}`}
          className={cn(
            "text-xs font-bold tracking-wider",
            isHighlighted ? "text-[#8FE388]" : "text-[#4A554C]",
          )}
        >
          {column.title}
        </h2>
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-[11.5px] font-bold",
            isHighlighted
              ? "bg-[#8FE388]/16 text-[#8FE388]"
              : "bg-white text-[#4A554C]",
          )}
        >
          {column.count}
        </span>
      </header>

      <ul className="flex flex-col gap-2">
        {column.cards.map((card) => (
          <li key={card.id}>
            <TrackerCard
              card={card}
              onOpenJourney={() => onOpenJourney(card)}
              onOpenPrep={onOpenPrep}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
