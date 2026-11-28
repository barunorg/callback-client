"use client";

import * as workspaceApi from "@/lib/api/workspaceApi";
import type { Gig } from "@/types/workspace/gigs";
import ActionButton from "@/components/shared/ActionButton";
import InitialsTile from "@/components/shared/InitialsTile";
import Pill from "@/components/shared/Pill";
import { useToast } from "@/stores/ToastProvider";

export default function GigCard({ gig }: { gig: Gig }) {
  const pushToast = useToast();
  const isInvite = gig.status === "INVITE";

  async function passGig() {
    await workspaceApi.passGig(gig.id);
    pushToast("Passed — the agent learns your gig taste too", { kind: "info" });
  }

  async function openProposalDraft() {
    await workspaceApi.draftGigProposal(gig.id);
    pushToast("Proposal drafted from your repos — review before it sends");
  }

  return (
    <article className="flex flex-col gap-3.5 rounded-[13px] border border-[#DED9CC] bg-[#FBFAF7] px-4.75 py-4.25 sm:flex-row sm:items-start">
      <InitialsTile initials={gig.initials} color={gig.color} />

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2.25">
          <h2 className="text-[14.5px] font-bold">{gig.brief}</h2>
          <Pill
            tone={isInvite ? "green" : "amber"}
            className="px-2.5 py-1 text-[10px] font-extrabold tracking-wider"
          >
            {gig.status}
          </Pill>
        </div>
        <p className="mt-0.75 text-xs text-[#4A554C]">
          {gig.client} · {gig.vetting}
        </p>
        <p className="mt-1.5 text-xs leading-normal text-[#6B7A6E]">
          <strong className="text-[#1E7A4F]">Why you:</strong> {gig.why}
        </p>
      </div>

      <div className="shrink-0 sm:text-right">
        <p className="font-heading text-[19px] font-extrabold tracking-[-0.01em]">
          {gig.pay}
        </p>
        <p className="mt-0.5 text-[11px] text-[#6B7A6E]">{gig.duration}</p>
        {isInvite && (
          <div className="mt-2.5 flex gap-1.5 sm:justify-end">
            <ActionButton
              variant="light"
              size="sm"
              className="px-2.75 font-semibold"
              onClick={passGig}
            >
              Pass
            </ActionButton>
            <ActionButton
              size="sm"
              className="px-3.25"
              onClick={openProposalDraft}
            >
              Open proposal draft
            </ActionButton>
          </div>
        )}
      </div>
    </article>
  );
}
