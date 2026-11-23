import Link from "next/link";
import { X } from "lucide-react";
import { getHeroContent } from "@/lib/api/landingApi";

export default async function HeroSection() {
  const { jobMatches, metrics } = await getHeroContent();

  return (
    <section
      aria-labelledby="hero-title"
      className="bg-[#EFECE4] text-[#141C17]"
    >
      <div className="mx-auto grid max-w-300 grid-cols-1 items-center gap-14 px-5 py-14 sm:px-12 sm:py-18 lg:grid-cols-[1.15fr_1fr]">
        <div className="min-w-0">
          <h1
            id="hero-title"
            className="mb-5 font-heading text-[42px] leading-[1.04] font-extrabold tracking-[-0.035em] sm:text-5xl lg:text-[56px]"
          >
            Your job search is a full-time job.
            <br />
            <span className="text-[#1E7A4F]">Give it to us. </span>
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/auth"
              className="rounded-xl bg-[#141C17] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#1E7A4F] sm:text-[15px]"
            >
              Upload resume — see matches in 10 min
            </Link>
            <span className="text-xs text-[#6B7A6E]">
              Free plan · no card needed
            </span>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 sm:gap-9">
            {metrics.map(({ value, description }) => (
              <div key={value}>
                <dt className="font-heading text-2xl font-bold tracking-tight">
                  {value}
                </dt>
                <dd className="mt-1 text-xs leading-5 text-[#6B7A6E]">
                  {description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <aside
          aria-label="Example job matches ready to send"
          className="relative"
        >
          <div className="absolute -top-4 right-2 z-10 rotate-[-1.5deg] rounded-xl bg-[#0F1F16] px-3.5 py-2.5 text-[#E9EFE9] shadow-[0_12px_30px_-10px_rgba(15,31,22,0.4)] sm:-right-3">
            <p className="flex items-center gap-1 text-xs font-semibold">
              <X aria-hidden="true" className="size-4 text-[#F2A79A]" />2 ghost
              listings hidden
            </p>
            <p className="pl-5 text-[11px] text-white/60">
              reposted 7×, no careers page
            </p>
          </div>
          <div className="rounded-[18px] border border-[#DED9CC] bg-[#FBFAF7] p-5 shadow-[0_24px_60px_-24px_rgba(15,31,22,0.25)] sm:p-6">
            <h2 className="mb-3 text-[11px] font-bold tracking-[0.07em] text-[#6B7A6E]">
              READY TO SEND · TODAY
            </h2>

            <ul className="flex flex-col gap-2.5">
              {jobMatches.map((job) => (
                <li
                  key={job.initials}
                  className="flex items-center gap-3 rounded-xl border border-[#E6E1D5] bg-white p-3"
                >
                  <span
                    aria-hidden="true"
                    className="grid size-9 shrink-0 place-items-center rounded-[9px] text-[13px] font-bold text-white"
                    style={{ backgroundColor: job.color }}
                  >
                    {job.initials}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[13px] font-bold text-[#141C17]">
                      {job.role}
                    </span>
                    <span className="block truncate text-[11.5px] text-[#6B7A6E]">
                      {job.company} · {job.detail}
                    </span>
                  </span>
                  <span className="shrink-0 font-heading text-[13px] font-extrabold text-[#1E7A4F]">
                    {job.match}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-3.5 grid grid-cols-2 gap-2 text-center text-[13px] font-semibold">
              <Link
                href="/auth"
                className="rounded-[10px] border border-[#CFC9BA] px-3 py-2.5 text-[#4A554C] transition-colors hover:bg-[#F0EDE4]"
              >
                Review each
              </Link>
              <Link
                href="/auth"
                className="rounded-[10px] bg-[#1E7A4F] px-3 py-2.5 text-white transition-colors hover:bg-[#186540]"
              >
                Approve all {jobMatches.length}
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
