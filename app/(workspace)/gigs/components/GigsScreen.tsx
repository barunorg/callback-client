"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import PageHeading from "@/components/shared/PageHeading";
import Pill from "@/components/shared/Pill";
import GigCard from "./GigCard";
import GigStepCard from "./GigStepCard";

const gigSteps = [
  {
    title: "1 · Matched invite",
    detail:
      "Clients pass the same ghost shield as employers. They see your proof, not a bid pile.",
  },
  {
    title: "2 · Fixed scope, escrowed",
    detail:
      "Scope agreed up front, money funded before you write a line. Disputes come to us, not you.",
  },
  {
    title: "3 · Paid on acceptance",
    detail: "Released same day. Callback fee: 5% on Pro, 12% on Free.",
  },
];

export default function GigsScreen() {
  const { data: gigs } = useSuspenseQuery(workspaceQueries.gigs);

  return (
    <div className="max-w-230">
      <PageHeading
        descriptionClassName="max-w-160"
        eyebrow="◇ WORK ON THE SIDE"
        title="Gigs"
        titleBadge={
          <Pill
            tone="blue"
            className="border border-[#C8D8EA] px-2.75 py-1.25 text-[10px] font-extrabold tracking-[0.06em]"
          >
            VISA-AWARE
          </Pill>
        }
        description={
          <>
            Fixed-scope projects from vetted clients, matched to skills your
            GitHub already proves. No bidding wars, no rank-chasing —{" "}
            <strong className="text-[#141C17]">clients come to you</strong>, and
            payment sits in escrow before you start.
          </>
        }
      />

      <p className="mb-4 rounded-[12px] border border-[#EAD9A8] bg-[#FFF7E6] px-4 py-3 text-[12.5px] leading-normal text-[#6B5A22]">
        Only gigs your work authorization allows are shown. On F-1 that means
        CPT-covered engagements — the rest unlock automatically with OPT. We
        will never let a $900 gig jeopardize your status.
      </p>

      <ul aria-label="Matched gigs" className="mb-4 flex flex-col gap-2.75">
        {gigs.map((gig) => (
          <li key={gig.id}>
            <GigCard gig={gig} />
          </li>
        ))}
      </ul>

      <ol
        aria-label="How gigs work"
        className="grid grid-cols-1 gap-3 md:grid-cols-3"
      >
        {gigSteps.map((step) => (
          <GigStepCard
            key={step.title}
            title={step.title}
            detail={step.detail}
          />
        ))}
      </ol>
    </div>
  );
}
