import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RecruiterMessage({
  message,
  enhanceState,
  isEnhanceOn,
  onToggleEnhance,
}: {
  message: string;
  enhanceState: "ON" | "OFF" | "PRO";
  isEnhanceOn: boolean;
  onToggleEnhance: () => void;
}) {
  return (
    <section
      aria-labelledby="recruiter-message-title"
      className="border-b border-[#E6E1D5] px-5.5 py-4.5 lg:border-r lg:border-b-0"
    >
      <header className="mb-2.5 flex items-center gap-2">
        <h3
          id="recruiter-message-title"
          className="flex-1 text-[11px] font-bold tracking-[0.07em] text-[#6B7A6E]"
        >
          MESSAGE TO RECRUITER
        </h3>
        <button
          type="button"
          aria-pressed={isEnhanceOn}
          onClick={onToggleEnhance}
          className={cn(
            "inline-flex items-center gap-1.25 rounded-full border px-2.75 py-1.25 text-[10.5px] font-extrabold tracking-[0.04em] transition-colors",
            isEnhanceOn
              ? "border-[#1E7A4F] bg-[#EFF5EF] text-[#1E7A4F]"
              : "border-[#CFC9BA] bg-white text-[#6B7A6E] hover:bg-[#F0EDE4]",
          )}
        >
          <Sparkles aria-hidden="true" className="size-3" />
          AI ENHANCE · {enhanceState}
        </button>
      </header>
      <p className="rounded-lg border border-[#E6E1D5] bg-white px-4 py-3.75 text-[13px] leading-[1.65] whitespace-pre-line text-[#2A342C]">
        {message}
      </p>
    </section>
  );
}
