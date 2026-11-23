import { Check } from "lucide-react";
import { heroMetrics } from "../data/hero";
import { testimonials } from "../data/landing-page";

const proofPoints = [
  "Every company vetted by the Ghost Shield before you see it",
  "Resume tailored per job, sent to a named recruiter — from your own email",
  "Nothing ever sends without your approval",
] as const;

export default function AuthProofPanel() {
  const featuredTestimonial = testimonials[0];

  return (
    <aside className="relative hidden min-h-svh items-center overflow-hidden bg-[#0F1F16] px-5 py-14 text-[#E9EFE9] lg:flex lg:px-[60px]">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 size-96 rounded-full bg-[#1E7A4F]/15 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-[440px]">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-[11.5px] font-bold tracking-[0.05em] text-white/70">
          <span className="size-[7px] animate-pulse rounded-full bg-[#8FE388]" />
          AGENTS SWEEPING 6 SOURCES RIGHT NOW
        </p>

        <h2 className="mb-[18px] font-heading text-[34px] leading-[1.08] font-extrabold tracking-[-0.03em]">
          The job search that runs while you&apos;re{" "}
          <span className="text-[#8FE388]">in class.</span>
        </h2>

        <ul className="mb-7 flex flex-col gap-3">
          {proofPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2.5 text-sm leading-[1.5] text-white/85"
            >
              <Check
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-[#8FE388]"
              />
              {point}
            </li>
          ))}
        </ul>

        <figure className="mb-7 rounded-[14px] border border-white/10 bg-white/5 p-5">
          <blockquote className="mb-3 font-heading text-[15.5px] leading-[1.4] font-bold">
            “{featuredTestimonial.quote}”
          </blockquote>
          <figcaption className="flex items-center gap-2.5 text-[11.5px] text-white/60">
            <span
              aria-hidden="true"
              className="grid size-[30px] shrink-0 place-items-center rounded-full text-[11px] font-bold text-white"
              style={{ backgroundColor: featuredTestimonial.color }}
            >
              {featuredTestimonial.initials}
            </span>
            {featuredTestimonial.name} · MSc CS, UT Dallas → Data Engineer
          </figcaption>
        </figure>

        <dl className="grid grid-cols-3 gap-4">
          {heroMetrics.map(({ value, description }, index) => (
            <div key={value}>
              <dt
                className={
                  index === 0
                    ? "font-heading text-2xl font-extrabold text-[#8FE388]"
                    : index === 2
                      ? "font-heading text-2xl font-extrabold text-[#F4B942]"
                      : "font-heading text-2xl font-extrabold"
                }
              >
                {value}
              </dt>
              <dd className="mt-0.5 text-[11px] leading-[1.4] text-white/55">
                {description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </aside>
  );
}
