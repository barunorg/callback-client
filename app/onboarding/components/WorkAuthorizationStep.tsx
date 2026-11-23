import type { VisaStatus } from "@/types/onboarding";
import { VISA_OPTIONS } from "../constants/onboardingOptions";
import ChoiceCard from "./ChoiceCard";
import StepHeader from "./StepHeader";
import ToggleRow from "./ToggleRow";

// Share of raw listings the two filters remove (from the design's numbers).
function filteredShare(sponsorOnly: boolean, hideClearance: boolean) {
  if (sponsorOnly) return hideClearance ? "38%" : "31%";
  return hideClearance ? "12%" : "0%";
}

export default function WorkAuthorizationStep({
  eyebrow,
  visa,
  sponsorOnly,
  hideClearance,
  onVisaChange,
  onSponsorOnlyChange,
  onHideClearanceChange,
}: {
  eyebrow: string;
  visa: VisaStatus;
  sponsorOnly: boolean;
  hideClearance: boolean;
  onVisaChange: (visa: VisaStatus) => void;
  onSponsorOnlyChange: (isOn: boolean) => void;
  onHideClearanceChange: (isOn: boolean) => void;
}) {
  return (
    <section aria-labelledby="onboarding-step-title">
      <StepHeader
        eyebrow={eyebrow}
        title="The part everyone else ignores."
        description="Your visa status filters out jobs that would auto-reject you — so not one application is wasted on a “no sponsorship” employer."
      />
      <fieldset className="mb-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <legend className="sr-only">Work authorization</legend>
        {VISA_OPTIONS.map((option) => (
          <ChoiceCard
            key={option.value}
            name="visa"
            title={option.title}
            description={option.description}
            isSelected={visa === option.value}
            onSelect={() => onVisaChange(option.value)}
          />
        ))}
      </fieldset>
      <div className="flex flex-col gap-2.25">
        <ToggleRow
          label="Only employers with sponsorship history"
          description="Cross-checked against H-1B filing records"
          isOn={sponsorOnly}
          onToggle={() => onSponsorOnlyChange(!sponsorOnly)}
        />
        <ToggleRow
          label="Hide citizenship / clearance-required roles"
          description="These auto-reject international candidates"
          isOn={hideClearance}
          onToggle={() => onHideClearanceChange(!hideClearance)}
        />
      </div>
      <p className="mt-3.5 rounded-xl bg-[#0F1F16] px-3.75 py-3.25 text-[12.5px] leading-[1.55] text-[#E9EFE9]">
        With these filters,{" "}
        <strong className="text-[#8FE388]">
          {filteredShare(sponsorOnly, hideClearance)}
        </strong>{" "}
        of raw listings get removed before they waste a minute of your time.
      </p>
    </section>
  );
}
