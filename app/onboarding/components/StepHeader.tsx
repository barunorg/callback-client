import type { ReactNode } from "react";

export default function StepHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: ReactNode;
}) {
  return (
    <header>
      <p className="mb-2.5 font-mono text-[11.5px] tracking-[0.08em] text-[#1E7A4F]">
        {eyebrow}
      </p>
      <h1
        id="onboarding-step-title"
        className="mb-2 font-heading text-[28px] leading-tight font-extrabold tracking-[-0.03em] sm:text-[34px]"
      >
        {title}
      </h1>
      <p className="mb-6.5 text-[14.5px] leading-[1.55] text-pretty text-[#4A554C]">
        {description}
      </p>
    </header>
  );
}
