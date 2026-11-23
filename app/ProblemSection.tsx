import { Clock3, Ghost, MailWarning, ShieldAlert } from "lucide-react";
import { problemCards } from "./data/landing-page";

const problemIcons = {
  ghost: Ghost,
  clock: Clock3,
  shield: ShieldAlert,
  mail: MailWarning,
};

export default function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-title"
      className="border-y border-[#DED9CC] bg-[#FBFAF7]"
    >
      <div className="mx-auto grid max-w-300 items-center gap-8 px-5 py-14 sm:px-12 sm:py-16 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
        <div>
          <p className="mb-3 text-xs font-medium tracking-[0.08em] text-[#B4483A]">
            THE PROBLEM
          </p>
          <h2
            id="problem-title"
            className="font-heading text-3xl leading-tight font-bold tracking-tight sm:text-[34px]"
          >
            It took our founder{" "}
            <span className="text-[#B4483A]">500 applications</span> to land one
            internship.
          </h2>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {problemCards.map(({ icon, title, description }) => {
            const Icon = problemIcons[icon];

            return (
              <li
                key={title}
                className="rounded-[13px] border border-[#E6E1D5] bg-white p-[18px]"
              >
                <Icon
                  aria-hidden="true"
                  className="mb-3 size-5 text-[#1E7A4F]"
                />
                <h3 className="mb-1 text-[13.5px] font-bold">{title}</h3>
                <p className="text-[12.5px] leading-[1.5] text-[#6B7A6E]">
                  {description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
