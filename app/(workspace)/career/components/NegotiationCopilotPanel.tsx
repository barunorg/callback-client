"use client";

import * as workspaceApi from "@/lib/api/workspaceApi";
import type { CareerData } from "@/types/workspace/career";
import ActionButton from "@/components/shared/ActionButton";
import Panel from "@/components/shared/Panel";
import Pill from "@/components/shared/Pill";
import { useToast } from "@/stores/ToastProvider";
import NegotiationFigure from "./NegotiationFigure";

export default function NegotiationCopilotPanel({
  negotiation,
}: {
  negotiation: CareerData["negotiation"];
}) {
  const pushToast = useToast();

  async function draftCounterEmail() {
    await workspaceApi.draftCounterOffer();
    pushToast(
      `Counter drafted at ${negotiation.suggestedCounter} — cites market p50 and their own filing band, never sounds desperate`,
    );
  }

  return (
    <Panel
      title="Negotiation copilot"
      aside={
        <Pill
          tone="blue"
          className="px-2.75 py-1 text-[10px] font-extrabold tracking-wider"
        >
          READS PUBLIC USCIS WAGE FILINGS
        </Pill>
      }
      description={
        <span className="block max-w-150">
          When an offer lands, the agent knows the number is soft — and exactly
          how soft. Visa holders leave the most on the table; not here.
        </span>
      }
      className="px-5.5"
    >
      <dl className="mb-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        {negotiation.figures.map((figure) => (
          <NegotiationFigure
            key={figure.label}
            label={figure.label}
            value={figure.value}
            detail={figure.detail}
          />
        ))}
      </dl>

      <div className="flex flex-wrap items-center gap-3 rounded-[11px] border border-[#A9C9AF] bg-[#EFF5EF] px-4 py-3.25">
        <p className="min-w-65 flex-1 text-[12.5px] leading-normal text-[#2A5A3E]">
          <strong>Suggested counter: {negotiation.suggestedCounter}</strong> +
          sign-on ask · acceptance odds {negotiation.acceptanceOdds}. One thing
          never on the table: visa timing.
        </p>
        <ActionButton
          className="px-4 py-2.5 text-xs"
          onClick={draftCounterEmail}
        >
          Draft the counter email
        </ActionButton>
      </div>
    </Panel>
  );
}
