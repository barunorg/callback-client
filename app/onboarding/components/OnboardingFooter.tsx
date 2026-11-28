import ActionButton from "@/components/shared/ActionButton";

export default function OnboardingFooter({
  step,
  stepCount,
  canContinue,
  onBack,
  onNext,
}: {
  step: number;
  stepCount: number;
  canContinue: boolean;
  onBack: () => void;
  onNext: () => void;
}) {
  const isLastStep = step === stepCount - 1;

  return (
    <footer className="fixed inset-x-0 bottom-0 z-20 flex items-center gap-3.5 border-t border-[#DED9CC] bg-[#EFECE4] px-5 py-3.5 sm:px-8">
      <div className="flex-1">
        {step > 0 && (
          <ActionButton
            variant="light"
            className="rounded-[10px] border-[#CFC9BA] bg-transparent px-4.5 py-2.75 text-[13px] font-semibold text-[#4A554C] hover:bg-[#E6E1D5]"
            onClick={onBack}
          >
            ← Back
          </ActionButton>
        )}
      </div>
      <span className="text-xs text-[#9A9384]">
        Step {step + 1} of {stepCount}
      </span>
      <ActionButton
        disabled={!canContinue}
        className="rounded-[11px] px-6.5 py-3.25 text-[13.5px] font-extrabold disabled:bg-[#D8D2C2] disabled:text-[#9A9384] disabled:opacity-100"
        onClick={onNext}
      >
        {isLastStep ? "Run the first scan →" : "Continue"}
      </ActionButton>
    </footer>
  );
}
