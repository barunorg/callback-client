import { cn } from "@/lib/utils";
import type { ResponseChannel } from "@/types/workspace/analytics";

const strengthClasses: Record<
  ResponseChannel["strength"],
  { fill: string; rate: string }
> = {
  strong: { fill: "bg-[#1E7A4F]", rate: "text-[#1E7A4F]" },
  medium: { fill: "bg-[#7AA98A]", rate: "text-[#4A554C]" },
  weak: { fill: "bg-[#C9C2B0]", rate: "text-[#9A9384]" },
};

export default function ChannelBar({ channel }: { channel: ResponseChannel }) {
  const styles = strengthClasses[channel.strength];

  return (
    <li className="grid grid-cols-[minmax(0,1fr)_52px] items-center gap-x-3.5 gap-y-1.5 sm:grid-cols-[190px_minmax(0,1fr)_52px]">
      <span className="col-span-2 text-[13px] font-semibold sm:col-span-1">
        {channel.label}
      </span>
      <span
        aria-hidden="true"
        className="h-5.5 overflow-hidden rounded-sm bg-[#EDEAE0]"
      >
        <span
          className={cn("block h-full rounded-sm", styles.fill)}
          style={{ width: channel.width }}
        />
      </span>
      <span className={cn("text-right text-[13px] font-bold", styles.rate)}>
        {channel.rate}
      </span>
    </li>
  );
}
