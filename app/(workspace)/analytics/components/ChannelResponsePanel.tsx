import type { ResponseChannel } from "@/types/workspace/analytics";
import Panel from "@/components/shared/Panel";
import ChannelBar from "./ChannelBar";

export default function ChannelResponsePanel({
  channels,
  insight,
}: {
  channels: ResponseChannel[];
  insight: string;
}) {
  return (
    <Panel title="Response rate by channel" className="p-5.5">
      <ul className="mt-0.5 flex flex-col gap-3.25">
        {channels.map((channel) => (
          <ChannelBar key={channel.label} channel={channel} />
        ))}
      </ul>
      <p className="mt-4 rounded-lg bg-[#EFF5EF] px-3.5 py-3 text-[12.5px] leading-normal text-[#2A5A3E]">
        <strong>Insight:</strong> {insight}
      </p>
    </Panel>
  );
}
