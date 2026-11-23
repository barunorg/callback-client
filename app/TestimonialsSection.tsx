import { testimonials } from "./data/landing-page";

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="mx-auto max-w-300 px-5 pt-14 sm:px-12 sm:pt-18"
    >
      <p className="mb-3 text-xs font-medium tracking-[0.08em] text-[#1E7A4F]">
        FROM STUDENTS LIKE YOU
      </p>
      <h2
        id="testimonials-title"
        className="mb-9 font-heading text-3xl font-bold tracking-tight sm:text-[34px]"
      >
        They got the call back.
      </h2>

      <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.initials}
            className="flex h-full flex-col gap-4 rounded-2xl border border-[#DED9CC] bg-[#FBFAF7] p-6 sm:px-[22px]"
          >
            <blockquote className="font-heading text-[17px] leading-[1.35] font-bold tracking-tight">
              “{testimonial.quote}”
            </blockquote>
            <p className="text-[13.5px] leading-[1.55] text-[#4A554C]">
              {testimonial.detail}
            </p>
            <footer className="mt-auto flex items-center gap-3 pt-1">
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-full text-[13px] font-bold text-white"
                style={{ backgroundColor: testimonial.color }}
              >
                {testimonial.initials}
              </span>
              <span>
                <span className="block text-[13px] font-bold">
                  {testimonial.name}
                </span>
                <span className="block text-[11.5px] text-[#6B7A6E]">
                  {testimonial.role}
                </span>
              </span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
