import { Check, X } from "lucide-react";
import {
  callbackPrinciples,
  comparisonCards,
  comparisonRows,
} from "./data/landing-page";

export default function DifferentiationSection() {
  return (
    <section
      aria-labelledby="differentiation-title"
      className="mx-auto max-w-300 px-5 pb-14 sm:px-12 sm:pb-18"
    >
      <div className="rounded-[20px] border border-[#DED9CC] bg-[#FBFAF7] p-5 sm:p-8 lg:p-11">
        <p className="mb-3 text-xs font-medium tracking-[0.08em] text-[#B4762A]">
          WHY THIS ISN&apos;T ONE MORE APPLY-BOT
        </p>
        <h2
          id="differentiation-title"
          className="mb-2 font-heading text-3xl font-bold tracking-tight sm:text-[34px]"
        >
          Auto-apply tools spray.{" "}
          <span className="text-[#1E7A4F]">Callback aims.</span>
        </h2>
        <p className="mb-7 max-w-[600px] text-[15px] leading-[1.55] text-[#4A554C]">
          Every tool in this space optimizes one number. Most picked a vanity
          metric. We picked the only one that gets you hired.
        </p>

        <div className="mb-8 grid gap-3 md:grid-cols-3">
          {comparisonCards.map((card) => (
            <article
              key={card.label}
              className={
                card.highlighted
                  ? "rounded-[14px] bg-[#0F1F16] p-5 text-[#E9EFE9] sm:px-[22px]"
                  : "rounded-[14px] border border-[#E6E1D5] bg-white p-5 sm:px-[22px]"
              }
            >
              <h3
                className={
                  card.highlighted
                    ? "mb-3 text-[10.5px] tracking-[0.07em] text-white/50"
                    : "mb-3 text-[10.5px] tracking-[0.07em] text-[#9A9384]"
                }
              >
                {card.label}
              </h3>
              <p
                className={
                  card.highlighted
                    ? "mb-1 text-[11px] font-extrabold tracking-[0.05em] text-[#8FE388]"
                    : "mb-1 text-[11px] font-extrabold tracking-[0.05em] text-[#B4483A]"
                }
              >
                OPTIMIZES FOR
              </p>
              <p className="mb-2 font-heading text-[19px] font-bold tracking-tight">
                {card.metric}
              </p>
              <p
                className={
                  card.highlighted
                    ? "text-[12.5px] leading-[1.55] text-white/70"
                    : "text-[12.5px] leading-[1.55] text-[#6B7A6E]"
                }
              >
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mb-2 hidden grid-cols-[170px_1fr_1.25fr] gap-x-[18px] px-4 text-[10.5px] font-extrabold tracking-[0.06em] text-[#6B7A6E] sm:grid">
          <span />
          <span>EVERYONE ELSE</span>
          <span className="text-[#1E7A4F]">CALLBACK</span>
        </div>
        <ul className="flex flex-col gap-2">
          {comparisonRows.map(({ label, others, callback }) => (
            <li
              key={label}
              className="grid gap-2 rounded-[11px] border border-[#E6E1D5] bg-white p-4 sm:grid-cols-[170px_1fr_1.25fr] sm:items-center sm:gap-x-[18px]"
            >
              <span className="text-[12.5px] font-bold">{label}</span>
              <span className="flex gap-2 text-[12.5px] leading-[1.45] text-[#9A9384]">
                <X
                  aria-hidden="true"
                  className="size-4 shrink-0 text-[#B4483A]"
                />
                {others}
              </span>
              <span className="flex gap-2 text-[12.5px] leading-[1.45] font-semibold text-[#2A342C]">
                <Check
                  aria-hidden="true"
                  className="size-4 shrink-0 text-[#1E7A4F]"
                />
                {callback}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 rounded-[13px] bg-[#0F1F16] px-5 py-4 text-[#E9EFE9]">
          <p className="text-[10.5px] tracking-[0.07em] text-white/50">
            CALLBACK WILL NEVER
          </p>
          {callbackPrinciples.map((principle) => (
            <span
              key={principle}
              className="flex items-center gap-1.5 text-[12.5px] font-semibold"
            >
              <X aria-hidden="true" className="size-4 text-[#F2A79A]" />
              {principle}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
