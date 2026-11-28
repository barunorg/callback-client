"use client";

import type { ParsedResume } from "@/types/onboarding";
import { useToast } from "@/stores/ToastProvider";
import ProfileSectionCard from "./ProfileSectionCard";
import StepHeader from "./StepHeader";
import ToggleChip from "./ToggleChip";

export default function ConfirmProfileStep({
  eyebrow,
  resume,
  excludedSkills,
  onToggleSkill,
}: {
  eyebrow: string;
  resume: ParsedResume;
  excludedSkills: string[];
  onToggleSkill: (skill: string) => void;
}) {
  const pushToast = useToast();
  const activeSkillCount = resume.skills.length - excludedSkills.length;

  // Dummy: inline editing isn't built yet.
  function showEditHint() {
    pushToast("Editing opens right after setup — or anytime from Profile", {
      kind: "info",
    });
  }

  return (
    <section aria-labelledby="onboarding-step-title">
      <StepHeader
        eyebrow={eyebrow}
        title="Here's what we read."
        description="Fix anything that's off — this feeds every tailored resume and message."
      />
      <div className="flex flex-col gap-3">
        <ProfileSectionCard
          label="EDUCATION"
          entries={[resume.education]}
          onEdit={showEditHint}
        />
        <ProfileSectionCard
          label="EXPERIENCE"
          entries={[resume.experience]}
          onEdit={showEditHint}
        />
        <ProfileSectionCard
          label="PROJECTS"
          entries={resume.projects}
          onEdit={showEditHint}
        />
        <section className="rounded-[14px] border border-[#DED9CC] bg-[#FBFAF7] px-4.75 py-4.25">
          <header className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="rounded-sm bg-[#EDEAE0] px-2 py-1 text-[10.5px] font-extrabold tracking-[0.06em] text-[#6B7A6E]">
              SKILLS · {activeSkillCount} ACTIVE
            </h3>
            <span className="text-[11.5px] text-[#9A9384]">
              tap to exclude from matching
            </span>
          </header>
          <div className="flex flex-wrap gap-1.75">
            {resume.skills.map((skill) => (
              <ToggleChip
                key={skill}
                label={skill}
                variant="exclude"
                isOn={!excludedSkills.includes(skill)}
                onToggle={() => onToggleSkill(skill)}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
