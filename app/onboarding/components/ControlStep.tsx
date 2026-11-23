import Pill from "@/components/shared/Pill";
import SegmentedControl from "@/components/shared/SegmentedControl";
import type { DailyCap, QuietHours } from "@/types/onboarding";
import type { QueueMode } from "@/types/workspace/queue";
import {
  DAILY_CAP_NOTES,
  DAILY_CAP_OPTIONS,
  MODE_OPTIONS,
  QUIET_HOURS_OPTIONS,
} from "../constants/onboardingOptions";
import ChoiceCard from "./ChoiceCard";
import SettingCard from "./SettingCard";
import StepHeader from "./StepHeader";

export default function ControlStep({
  eyebrow,
  mode,
  dailyCap,
  quietHours,
  onModeChange,
  onDailyCapChange,
  onQuietHoursChange,
}: {
  eyebrow: string;
  mode: QueueMode;
  dailyCap: DailyCap;
  quietHours: QuietHours;
  onModeChange: (mode: QueueMode) => void;
  onDailyCapChange: (dailyCap: DailyCap) => void;
  onQuietHoursChange: (quietHours: QuietHours) => void;
}) {
  return (
    <section aria-labelledby="onboarding-step-title">
      <StepHeader
        eyebrow={eyebrow}
        title="How much should we do without asking?"
        description="You can change this anytime. Most people start hands-on, then loosen up after the first week."
      />
      <fieldset className="mb-3.5 flex flex-col gap-2.25">
        <legend className="sr-only">How applications go out</legend>
        {MODE_OPTIONS.map((option) => (
          <ChoiceCard
            key={option.value}
            name="mode"
            title={option.title}
            description={option.description}
            isSelected={mode === option.value}
            onSelect={() => onModeChange(option.value)}
            tag={
              option.tag && (
                <Pill
                  tone={option.tag.tone}
                  className="px-2 py-0.75 text-[9.5px] font-extrabold tracking-wider"
                >
                  {option.tag.label}
                </Pill>
              )
            }
          />
        ))}
      </fieldset>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <SettingCard title="Daily cap">
          <SegmentedControl
            label="Daily cap"
            options={DAILY_CAP_OPTIONS}
            value={dailyCap}
            onChange={onDailyCapChange}
          />
          <p className="mt-2.25 text-[11.5px] text-[#6B7A6E]">
            {DAILY_CAP_NOTES[dailyCap]}
          </p>
        </SettingCard>
        <SettingCard title="Quiet hours">
          <SegmentedControl
            label="Quiet hours"
            options={QUIET_HOURS_OPTIONS}
            value={quietHours}
            onChange={onQuietHoursChange}
          />
          <p className="mt-2.25 text-[11.5px] text-[#6B7A6E]">
            No sends or notifications during class — recruiters see you reply at
            human hours.
          </p>
        </SettingCard>
      </div>
    </section>
  );
}
