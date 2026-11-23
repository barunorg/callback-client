"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import * as onboardingApi from "@/lib/api/onboardingApi";
import type { OnboardingAnswers } from "@/types/onboarding";
import { DEFAULT_ANSWERS, STEP_LABELS } from "../constants/onboardingOptions";
import ConfirmProfileStep from "./ConfirmProfileStep";
import ControlStep from "./ControlStep";
import FirstScanStep from "./FirstScanStep";
import OnboardingFooter from "./OnboardingFooter";
import OnboardingTopBar from "./OnboardingTopBar";
import ResumeStep from "./ResumeStep";
import TargetsStep from "./TargetsStep";
import WorkAuthorizationStep from "./WorkAuthorizationStep";

const STEP_COUNT = STEP_LABELS.length;

/** Adds `item` if missing, removes it if present. */
function toggleItem(list: string[], item: string) {
  return list.includes(item)
    ? list.filter((value) => value !== item)
    : [...list, item];
}

/**
 * Guided setup after sign-up: five steps, then the first scan. Answers stay
 * in local state and are sent once, when the student starts the first scan.
 */
export default function OnboardingFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(DEFAULT_ANSWERS);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const parse = useMutation({
    mutationFn: (file: File) => onboardingApi.parseResume(file.name),
  });
  const complete = useMutation({
    mutationFn: onboardingApi.completeOnboarding,
  });

  const canContinue = step !== 0 || parse.isSuccess;
  const eyebrow = `STEP ${step + 1} OF ${STEP_COUNT} — ${STEP_LABELS[step]}`;

  function update(changes: Partial<OnboardingAnswers>) {
    setAnswers((current) => ({ ...current, ...changes }));
  }

  function uploadResume(file: File) {
    setResumeFile(file);
    parse.mutate(file);
  }

  function goTo(nextStep: number) {
    setStep(nextStep);
    window.scrollTo({ top: 0 });
  }

  function goNext() {
    if (!canContinue) return;
    if (step === STEP_COUNT - 1) complete.mutate(answers);
    goTo(step + 1);
  }

  return (
    <div className="flex min-h-svh flex-col bg-[#EFECE4] text-[#141C17]">
      <OnboardingTopBar step={step} stepCount={STEP_COUNT} />

      <main className="flex flex-1 justify-center px-5 pt-11 pb-30 sm:px-8">
        <div className="w-full max-w-165">
          {step === 0 && (
            <ResumeStep
              eyebrow={eyebrow}
              file={resumeFile}
              summary={parse.data?.summary}
              isParsed={parse.isSuccess}
              onFileSelected={uploadResume}
            />
          )}
          {step === 1 && parse.data && (
            <ConfirmProfileStep
              eyebrow={eyebrow}
              resume={parse.data}
              excludedSkills={answers.excludedSkills}
              onToggleSkill={(skill) =>
                update({
                  excludedSkills: toggleItem(answers.excludedSkills, skill),
                })
              }
            />
          )}
          {step === 2 && (
            <TargetsStep
              eyebrow={eyebrow}
              roles={answers.roles}
              jobType={answers.jobType}
              locations={answers.locations}
              onToggleRole={(role) =>
                update({ roles: toggleItem(answers.roles, role) })
              }
              onJobTypeChange={(jobType) => update({ jobType })}
              onToggleLocation={(location) =>
                update({ locations: toggleItem(answers.locations, location) })
              }
            />
          )}
          {step === 3 && (
            <WorkAuthorizationStep
              eyebrow={eyebrow}
              visa={answers.visa}
              sponsorOnly={answers.sponsorOnly}
              hideClearance={answers.hideClearance}
              onVisaChange={(visa) => update({ visa })}
              onSponsorOnlyChange={(sponsorOnly) => update({ sponsorOnly })}
              onHideClearanceChange={(hideClearance) =>
                update({ hideClearance })
              }
            />
          )}
          {step === 4 && (
            <ControlStep
              eyebrow={eyebrow}
              mode={answers.mode}
              dailyCap={answers.dailyCap}
              quietHours={answers.quietHours}
              onModeChange={(mode) => update({ mode })}
              onDailyCapChange={(dailyCap) => update({ dailyCap })}
              onQuietHoursChange={(quietHours) => update({ quietHours })}
            />
          )}
          {step === STEP_COUNT && <FirstScanStep />}
        </div>
      </main>

      {step < STEP_COUNT && (
        <OnboardingFooter
          step={step}
          stepCount={STEP_COUNT}
          canContinue={canContinue}
          onBack={() => goTo(Math.max(0, step - 1))}
          onNext={goNext}
        />
      )}
    </div>
  );
}
