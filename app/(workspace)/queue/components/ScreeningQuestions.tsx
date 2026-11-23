import { cn } from "@/lib/utils";
import type { ScreeningAnswer } from "@/types/workspace/queue";
import Pill from "@/components/shared/Pill";

export default function ScreeningQuestions({
  answers,
}: {
  answers: ScreeningAnswer[];
}) {
  return (
    <section
      aria-labelledby="screening-title"
      className="mt-2.5 rounded-lg border border-[#E6E1D5] bg-white px-3.25 py-3"
    >
      <header className="mb-2.25 flex items-center gap-1.75">
        <h3
          id="screening-title"
          className="flex-1 text-[10.5px] font-extrabold tracking-[0.06em] text-[#6B7A6E]"
        >
          SCREENING QUESTIONS · AUTO-ANSWERED
        </h3>
        <Pill className="px-2 text-[10px]">{answers.length} filled</Pill>
      </header>
      <dl>
        {answers.map((item) => (
          <div
            key={item.question}
            className="border-t border-[#EFECE4] py-2.25"
          >
            <dt className="text-[11.5px] leading-[1.4] text-[#6B7A6E]">
              {item.question}
            </dt>
            <dd className="mt-0.75 flex flex-wrap items-center gap-1.75">
              <span
                className={cn(
                  "text-[12.5px] font-bold",
                  /\bNo\b/.test(item.answer)
                    ? "text-[#B4483A]"
                    : "text-[#141C17]",
                )}
              >
                {item.answer}
              </span>
              {item.flag && (
                <span className="rounded-full border border-[#EAD9A8] bg-[#FFF7E6] px-2 py-0.5 text-[10px] font-bold text-[#B4762A]">
                  {item.flag}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-2.25 border-t border-[#EFECE4] pt-2.25 text-[11px] leading-normal text-[#9A9384]">
        Answered once in your profile, filled the same way every time — no
        fumbled sponsorship question, ever. Knockout mismatches are flagged
        before you send.
      </p>
    </section>
  );
}
