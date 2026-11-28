"use client";

import { useInvalidatingMutation } from "@/hooks/useInvalidatingMutation";
import { Check } from "lucide-react";
import * as workspaceApi from "@/lib/api/workspaceApi";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import type { Integration } from "@/types/workspace/connections";
import ActionButton from "@/components/shared/ActionButton";
import InitialsTile from "@/components/shared/InitialsTile";
import Pill from "@/components/shared/Pill";
import { useToast } from "@/stores/ToastProvider";

export default function IntegrationCard({
  integration,
}: {
  integration: Integration;
}) {
  const pushToast = useToast();

  const connect = useInvalidatingMutation({
    mutationFn: workspaceApi.connectIntegration,
    invalidate: [workspaceQueries.connections.queryKey],
    onSuccess: () => {
      pushToast(`${integration.name} connected — joining the next sweep`);
    },
  });

  return (
    <article className="flex flex-1 flex-col gap-3 rounded-xl border border-[#DED9CC] bg-[#FBFAF7] px-5 py-4.75">
      <header className="flex items-center gap-3">
        <InitialsTile
          initials={integration.glyph}
          color={integration.color}
          className="size-10 text-[15px] font-extrabold"
        />
        <div className="min-w-0 flex-1">
          <h2 className="text-[14.5px] font-bold">{integration.name}</h2>
          <p className="text-[11.5px] text-[#6B7A6E]">{integration.tag}</p>
        </div>
        {integration.isConnected ? (
          <Pill className="px-2.5 py-1.25 text-[10px] font-extrabold tracking-wider">
            CONNECTED
          </Pill>
        ) : (
          <ActionButton
            className="px-3.5 py-2 text-xs"
            disabled={connect.isPending}
            onClick={() => connect.mutate(integration.key)}
          >
            {connect.isPending ? "Connecting…" : "Connect"}
          </ActionButton>
        )}
      </header>

      <p className="text-[12.5px] leading-[1.55] text-[#4A554C]">
        {integration.description}
      </p>

      <ul className="flex flex-col gap-1.5">
        {integration.unlocks.map((unlock) => (
          <li
            key={unlock}
            className="flex gap-2 text-xs leading-[1.45] text-[#2A342C]"
          >
            <Check
              aria-hidden="true"
              strokeWidth={3}
              className="mt-0.5 size-3.5 shrink-0 text-[#1E7A4F]"
            />
            <span>{unlock}</span>
          </li>
        ))}
      </ul>

      {integration.footnote && (
        <p className="mt-auto rounded-md bg-[#F3F1E9] px-2.75 py-2 text-[11.5px] leading-[1.45] text-[#6B7A6E]">
          {integration.footnote}
        </p>
      )}
    </article>
  );
}
