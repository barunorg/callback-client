import Link from "next/link";
import BrandMark from "@/components/icons/BrandMark";
import { cn } from "@/lib/utils";

export default function OnboardingTopBar({
  step,
  stepCount,
}: {
  step: number;
  stepCount: number;
}) {
  const isComplete = step >= stepCount;

  return (
    <header className="sticky top-0 z-10 flex flex-wrap items-center gap-5 border-b border-[#DED9CC] bg-[#EFECE4] px-5 py-4.5 sm:px-8">
      <div className="flex flex-1 items-center gap-2.25">
        <BrandMark className="size-7 rounded-lg text-[15px]" />
        <span className="font-heading text-base font-bold tracking-[-0.02em]">
          Callback
        </span>
        <span className="ml-1 hidden text-xs text-[#9A9384] sm:inline">
          · guided setup
        </span>
      </div>

      <ol aria-label="Setup progress" className="flex gap-1.5">
        {Array.from({ length: stepCount }, (_, index) => (
          <li
            key={index}
            aria-current={index === step ? "step" : undefined}
            className={cn(
              "h-1.25 w-8.5 rounded-full transition-colors duration-200",
              isComplete || index < step
                ? "bg-[#1E7A4F]"
                : index === step
                  ? "bg-[#141C17]"
                  : "bg-[#D8D2C2]",
            )}
          >
            <span className="sr-only">
              Step {index + 1}
              {index < step || isComplete ? " (done)" : ""}
            </span>
          </li>
        ))}
      </ol>

      <div className="flex flex-1 items-center justify-end gap-3.5">
        <span className="hidden text-xs text-[#9A9384] sm:inline">
          {isComplete ? "Setup complete" : "About 3 minutes"}
        </span>
        <Link
          href="/"
          title="Exit to site"
          className="rounded-lg border border-[#CFC9BA] px-2.75 py-1.5 text-xs font-semibold text-[#4A554C] hover:bg-[#E6E1D5]"
        >
          Exit
        </Link>
      </div>
    </header>
  );
}
