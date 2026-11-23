import type { RadarBar } from "@/types/workspace/career";
import Pill from "@/components/shared/Pill";

export default function RadarBarCard({ bar }: { bar: RadarBar }) {
  return (
    <li className="rounded-[11px] border border-white/10 bg-white/5 px-3.75 py-3.25">
      <p className="mb-1.25 text-[10.5px] font-extrabold tracking-[0.06em] text-[#E9EFE9]/50">
        {bar.label}
      </p>
      <p className="mb-1.75 text-[12.5px] leading-[1.4] font-bold">{bar.bar}</p>
      <Pill tone="onDark" className="text-[10.5px]">
        {bar.met} this quarter
      </Pill>
    </li>
  );
}
