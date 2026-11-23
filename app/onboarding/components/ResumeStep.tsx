import type { ParsedResume } from "@/types/onboarding";
import { PARSE_STEP_LABELS } from "../constants/onboardingOptions";
import ParseProgressCard from "./ParseProgressCard";
import ResumeDropzone from "./ResumeDropzone";
import StepHeader from "./StepHeader";

export default function ResumeStep({
  eyebrow,
  file,
  summary,
  isParsed,
  onFileSelected,
}: {
  eyebrow: string;
  file: File | null;
  summary?: ParsedResume["summary"];
  isParsed: boolean;
  onFileSelected: (file: File) => void;
}) {
  return (
    <section aria-labelledby="onboarding-step-title">
      <StepHeader
        eyebrow={eyebrow}
        title="Start with your resume."
        description="One upload powers everything — matching, tailoring, and messages written in your voice. Nothing gets sent without your say-so."
      />
      {file ? (
        <ParseProgressCard
          file={file}
          stepLabels={PARSE_STEP_LABELS}
          summary={summary}
          isParsed={isParsed}
        />
      ) : (
        <ResumeDropzone onFileSelected={onFileSelected} />
      )}
    </section>
  );
}
