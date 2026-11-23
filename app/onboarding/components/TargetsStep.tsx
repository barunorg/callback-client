import SegmentedControl from "@/components/shared/SegmentedControl";
import type { JobType } from "@/types/onboarding";
import {
  JOB_TYPE_OPTIONS,
  LOCATION_OPTIONS,
  ROLE_OPTIONS,
} from "../constants/onboardingOptions";
import SettingCard from "./SettingCard";
import StepHeader from "./StepHeader";
import ToggleChip from "./ToggleChip";

export default function TargetsStep({
  eyebrow,
  roles,
  jobType,
  locations,
  onToggleRole,
  onJobTypeChange,
  onToggleLocation,
}: {
  eyebrow: string;
  roles: string[];
  jobType: JobType;
  locations: string[];
  onToggleRole: (role: string) => void;
  onJobTypeChange: (jobType: JobType) => void;
  onToggleLocation: (location: string) => void;
}) {
  return (
    <section aria-labelledby="onboarding-step-title">
      <StepHeader
        eyebrow={eyebrow}
        title="What are we hunting?"
        description="Pre-selected from your resume. The agent only pursues what you pick."
      />
      <div className="flex flex-col gap-3">
        <SettingCard title="Roles">
          <div className="flex flex-wrap gap-1.75">
            {ROLE_OPTIONS.map((role) => (
              <ToggleChip
                key={role}
                label={role}
                isOn={roles.includes(role)}
                onToggle={() => onToggleRole(role)}
              />
            ))}
          </div>
        </SettingCard>
        <SettingCard title="Type">
          <SegmentedControl
            label="Job type"
            options={JOB_TYPE_OPTIONS}
            value={jobType}
            onChange={onJobTypeChange}
          />
          <p className="mt-2.5 text-xs text-[#6B7A6E]">
            Internships count — CPT-eligible ones are prioritized while you
            study.
          </p>
        </SettingCard>
        <SettingCard title="Locations">
          <div className="flex flex-wrap gap-1.75">
            {LOCATION_OPTIONS.map((location) => (
              <ToggleChip
                key={location}
                label={location}
                isOn={locations.includes(location)}
                onToggle={() => onToggleLocation(location)}
              />
            ))}
          </div>
        </SettingCard>
      </div>
    </section>
  );
}
