import type { TimelineEntry } from "@/types/workspace/common";
import Panel from "@/components/shared/Panel";
import Pill from "@/components/shared/Pill";
import TimelineStep from "@/components/shared/TimelineStep";

export default function VisaClockPanel({
  timeline,
}: {
  timeline: TimelineEntry[];
}) {
  return (
    <Panel
      title="Your visa clock — tracked for years, not weeks"
      aside={
        <Pill tone="green" className="px-2.75 py-1 text-[11.5px]">
          reminders 90 / 30 / 7 days before every deadline
        </Pill>
      }
      description="The part every other tool ignores the moment you’re hired — and the reason people stay for years."
      className="px-5.5"
    >
      <ol>
        {timeline.map((entry, index) => (
          <TimelineStep
            key={entry.label}
            {...entry}
            isLast={index === timeline.length - 1}
          />
        ))}
      </ol>
    </Panel>
  );
}
