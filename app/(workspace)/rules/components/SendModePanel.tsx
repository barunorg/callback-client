"use client";

import { useInvalidatingMutation } from "@/hooks/useInvalidatingMutation";
import * as workspaceApi from "@/lib/api/workspaceApi";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import type { QueueMode } from "@/types/workspace/queue";
import Panel from "@/components/shared/Panel";
import SendModeOption from "./SendModeOption";

const sendModes: { id: QueueMode; title: string; description: string }[] = [
  {
    id: "each",
    title: "Approve each application",
    description:
      "Every application waits for your explicit OK. Best while you’re calibrating.",
  },
  {
    id: "batch",
    title: "Daily batch review",
    description:
      "One notification a day: review the whole batch in ~5 minutes, approve in one tap.",
  },
  {
    id: "auto",
    title: "Agent mode — full autopilot",
    description:
      "The agent crawls sources hourly and auto-applies where predicted callback chance is highest. Verified companies only. Daily digest at 6pm. Pro feature.",
  },
];

export default function SendModePanel({ sendMode }: { sendMode: QueueMode }) {
  const updateMode = useInvalidatingMutation({
    mutationFn: workspaceApi.updateSendMode,
    invalidate: [workspaceQueries.rules.queryKey],
  });

  // Show the picked mode right away while the mock request runs.
  const selectedMode = updateMode.isPending ? updateMode.variables : sendMode;

  return (
    <Panel titleClassName="text-[15px]" title="How should applications go out?">
      <fieldset className="flex flex-col gap-2">
        <legend className="sr-only">How should applications go out?</legend>
        {sendModes.map((mode) => (
          <SendModeOption
            key={mode.id}
            value={mode.id}
            title={mode.title}
            description={mode.description}
            isSelected={selectedMode === mode.id}
            onSelect={() => updateMode.mutate(mode.id)}
          />
        ))}
      </fieldset>
    </Panel>
  );
}
