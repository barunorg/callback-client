import Link from "next/link";

export default function AgentModeBanner() {
  return (
    <section
      aria-label="Agent mode"
      className="mb-3.5 flex flex-wrap items-center gap-3 rounded-[12px] border border-[#EAD9A8] bg-[#FFF7E6] px-4 py-3"
    >
      <p className="min-w-0 flex-1 text-[13px] text-[#6B5A22]">
        <strong>Agent mode is live.</strong> Crawling sources hourly,
        auto-applying where predicted callback ≥ 25% — verified companies only,
        max 25/day. Daily digest at 6pm.
      </p>
      <Link
        href="/rules/"
        className="shrink-0 rounded-[9px] border border-[#D9C687] bg-white px-3.5 py-2 text-xs font-semibold text-[#6B5A22] transition-colors hover:bg-[#FFFBF2]"
      >
        Edit rules
      </Link>
    </section>
  );
}
