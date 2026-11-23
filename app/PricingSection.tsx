import Link from "next/link";
import { Check } from "lucide-react";
import { pricingPlans } from "./data/landing-page";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-8"
    >
      <div className="mx-auto max-w-300 px-5 py-14 sm:px-12 sm:py-18">
        <header className="mb-10 text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.08em] text-[#1E7A4F]">
            PRICING
          </p>
          <h2
            id="pricing-title"
            className="mb-2 font-heading text-3xl font-bold tracking-tight sm:text-[34px]"
          >
            Cheaper than one skipped meal plan.
          </h2>
          <p className="text-[15px] text-[#4A554C]">
            Student-priced, cancel anytime. Universities can license for their
            whole career center.
          </p>
        </header>

        <div className="grid items-stretch gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.highlighted
                  ? "relative flex flex-col rounded-[18px] border border-[#0F1F16] bg-[#0F1F16] p-6 text-[#E9EFE9] sm:px-[26px] sm:py-7"
                  : "relative flex flex-col rounded-[18px] border border-[#DED9CC] bg-[#FBFAF7] p-6 text-[#141C17] sm:px-[26px] sm:py-7"
              }
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-[26px] rounded-full bg-[#8FE388] px-3 py-1 text-[11px] font-extrabold tracking-[0.04em] text-[#0F1F16]">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-heading text-[19px] font-bold">
                {plan.name}
              </h3>
              <p
                className={
                  plan.highlighted
                    ? "mt-1 min-h-[34px] text-[12.5px] leading-[1.4] text-white/55"
                    : "mt-1 min-h-[34px] text-[12.5px] leading-[1.4] text-[#6B7A6E]"
                }
              >
                {plan.audience}
              </p>
              <p className="my-4 flex items-baseline gap-2">
                <span className="font-heading text-[40px] font-extrabold tracking-[-0.03em]">
                  {plan.price}
                </span>
                <span
                  className={
                    plan.highlighted
                      ? "text-[13px] text-white/55"
                      : "text-[13px] text-[#6B7A6E]"
                  }
                >
                  {plan.billing}
                </span>
              </p>
              <ul className="flex flex-1 flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-[13px] leading-[1.45]"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-[#1E7A4F]"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/auth"
                className={
                  plan.highlighted
                    ? "mt-6 rounded-[11px] border border-[#8FE388] bg-[#8FE388] px-4 py-3 text-center text-[13.5px] font-bold text-[#0F1F16] transition-colors hover:bg-[#A7F2A0]"
                    : "mt-6 rounded-[11px] border border-[#CFC9BA] bg-white px-4 py-3 text-center text-[13.5px] font-bold text-[#141C17] transition-colors hover:border-[#1E7A4F]"
                }
              >
                {plan.action}
              </Link>
            </article>
          ))}
        </div>

        <aside className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-[14px] border border-[#DED9CC] bg-[#FBFAF7] p-5 sm:px-6">
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-bold">Callback for Universities</h3>
            <p className="mt-1 text-[12.5px] text-[#6B7A6E]">
              Career centers license seats for international-student cohorts.
              Placement stats, bulk onboarding, advisor dashboard.
            </p>
          </div>
          <Link
            href="/auth"
            className="shrink-0 rounded-[10px] bg-[#141C17] px-4 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-[#1E7A4F]"
          >
            See the advisor console →
          </Link>
        </aside>
      </div>
    </section>
  );
}
