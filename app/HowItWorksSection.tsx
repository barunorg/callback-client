import { applicationSteps } from "./data/landing-page";

export default function HowItWorksSection() {
  return (
    <section
      id="how"
      aria-labelledby="how-it-works-title"
      className="scroll-mt-8"
    >
      <div className="mx-auto max-w-300 px-5 py-14 sm:px-12 sm:py-18">
        <p className="mb-3 text-xs font-medium tracking-[0.08em] text-[#1E7A4F]">
          HOW IT WORKS
        </p>
        <h2
          id="how-it-works-title"
          className="mb-2 font-heading text-3xl font-bold tracking-tight sm:text-[34px]"
        >
          It applies the way a careful human would.
        </h2>
        <p className="mb-9 max-w-[560px] text-[15px] leading-[1.55] text-[#4A554C]">
          Not a spray-and-pray bot. Every step mirrors what you&apos;d do
          yourself on a good day — checked, verified, personal.
        </p>

        <ol className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {applicationSteps.map(({ number, title, description }) => (
            <li
              key={number}
              className="rounded-[15px] border border-[#DED9CC] bg-[#FBFAF7] p-5"
            >
              <span className="mb-4 grid size-[30px] place-items-center rounded-[9px] bg-[#8FE388] font-heading text-[15px] font-extrabold text-[#0F1F16]">
                {number}
              </span>
              <h3 className="mb-1.5 text-[15px] font-bold">{title}</h3>
              <p className="text-[12.5px] leading-[1.55] text-[#6B7A6E]">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
