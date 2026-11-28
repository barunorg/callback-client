"use client";

import { useInvalidatingMutation } from "@/hooks/useInvalidatingMutation";
import { cn } from "@/lib/utils";
import * as workspaceApi from "@/lib/api/workspaceApi";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import type { CareerData } from "@/types/workspace/career";
import ActionButton from "@/components/shared/ActionButton";
import Panel from "@/components/shared/Panel";
import SwitchTrack from "@/components/shared/SwitchTrack";
import { useToast } from "@/stores/ToastProvider";

export default function StandbyAgentPanel({
  isStandbyOn,
  watchlist,
  digest,
}: {
  isStandbyOn: boolean;
  watchlist: string[];
  digest: CareerData["standbyDigest"];
}) {
  const pushToast = useToast();

  const standby = useInvalidatingMutation({
    mutationFn: workspaceApi.setStandbyAgent,
    invalidate: [workspaceQueries.career.queryKey],
    onSuccess: (_result, isOn) => {
      pushToast(
        isOn
          ? "Standby on — quiet sweeps, 95+ matches only"
          : "Standby off — the agent goes fully dormant",
        { kind: "info" },
      );
    },
  });

  // Show the requested state right away while the mock request runs.
  const isOn = standby.isPending ? standby.variables : isStandbyOn;

  async function addWatchlistCompany() {
    await workspaceApi.addWatchlistCompany();
    pushToast(
      "Watchlist company added — the agent stays silent below a 95 match",
      { kind: "info" },
    );
  }

  return (
    <Panel
      title="Standby agent"
      aside={
        <button
          type="button"
          role="switch"
          aria-checked={isOn}
          aria-label="Standby agent"
          disabled={standby.isPending}
          onClick={() => standby.mutate(!isOn)}
          className="flex items-center gap-2"
        >
          <span
            className={cn(
              "text-[11px] font-bold",
              isOn ? "text-[#1E7A4F]" : "text-[#9A9384]",
            )}
          >
            {isOn ? "ON" : "OFF"}
          </span>
          <SwitchTrack isOn={isOn} />
        </button>
      }
      description="The search never fully stops — it goes quiet. Wakes you only for a 95+ match at companies you name."
    >
      <ul aria-label="Watchlist" className="mb-3.5 flex flex-wrap gap-1.75">
        {watchlist.map((company) => (
          <li
            key={company}
            className="rounded-full bg-[#141C17] px-3 py-1.5 text-xs font-semibold text-white"
          >
            {company}
          </li>
        ))}
        <li>
          <ActionButton
            variant="dashed"
            size="sm"
            className="rounded-full px-3 py-1.5 text-xs font-semibold"
            onClick={addWatchlistCompany}
          >
            + add company
          </ActionButton>
        </li>
      </ul>

      <p className="mb-2.5 rounded-lg border border-[#E6E1D5] bg-white px-3.25 py-2.75 text-xs text-[#4A554C]">
        Last month, quietly:{" "}
        <strong>{digest.matchedRoles} roles matched your profile</strong> ·
        median comp {digest.medianComp} —{" "}
        <strong className="text-[#1E7A4F]">{digest.delta}</strong> vs your
        offer.
      </p>

      <aside className="rounded-[11px] bg-[#0F1F16] px-3.75 py-3.25 text-[#E9EFE9]">
        <h3 className="mb-1.25 text-[11px] font-extrabold tracking-wider text-[#8FE388]">
          60-DAY SAFETY NET
        </h3>
        <p className="text-xs leading-[1.55] text-[#E9EFE9]/75">
          Laid off on H-1B, you have 60 days. One click re-activates everything
          — profile, contacts, tailored resumes — current as of today, not two
          years ago.
        </p>
      </aside>
    </Panel>
  );
}
