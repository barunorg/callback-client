import { getCareerFeatures } from "@/lib/api/landingApi";

export default async function CareerModeSection() {
  const careerFeatures = await getCareerFeatures();

  return (
    <section
      aria-labelledby="career-mode-title"
      className="bg-[#0F1F16] text-[#E9EFE9]"
    >
      <div className="mx-auto max-w-300 px-5 py-14 sm:px-12 sm:py-18">
        <p className="mb-3 text-xs font-medium tracking-[0.08em] text-[#8FE388]">
          AFTER THE OFFER
        </p>
        <h2
          id="career-mode-title"
          className="mb-2 max-w-160 font-heading text-3xl leading-tight font-bold tracking-tight sm:text-[34px]"
        >
          The first job tool you don&apos;t delete the day you&apos;re hired.
        </h2>
        <p className="mb-9 max-w-140 text-[15px] leading-[1.55] text-white/65">
          For an international hire, the offer is the halfway point. Callback
          switches into Career mode and stays on the clock — for $3/mo. Vetted
          fixed-scope gigs, a negotiation copilot and your study pod come along.
        </p>

        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {careerFeatures.map(({ title, description }) => (
            <article
              key={title}
              className="rounded-[15px] border border-white/10 bg-white/5 p-5"
            >
              <h3 className="mb-2 text-[15px] font-bold">{title}</h3>
              <p className="text-[12.5px] leading-[1.55] text-white/65">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
