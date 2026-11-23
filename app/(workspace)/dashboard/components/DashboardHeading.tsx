import Link from "next/link";

export default function DashboardHeading({
  sweepLabel,
  newMatches,
}: {
  sweepLabel: string;
  newMatches: number;
}) {
  return (
    <header className="mb-6.5 flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0">
        <p className="mb-1.5 text-xs font-semibold tracking-[0.08em] text-[#6B7A6E]">
          {sweepLabel}
          <span className="tracking-normal">am</span> sweep, while you were
          asleep
        </p>
        <h1 className="font-heading text-[28px] leading-[1.04] font-bold tracking-[-0.035em] sm:text-[34px]">
          While you studied, I found{" "}
          <span className="border-b-3 border-[#8FE388] text-[#1E7A4F]">
            {newMatches} jobs
          </span>{" "}
          worth your time.
        </h1>
      </div>
      <Link
        href="/queue/"
        className="shrink-0 rounded-lg bg-[#141C17] px-5 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-[#1E7A4F]"
      >
        Review queue →
      </Link>
    </header>
  );
}
