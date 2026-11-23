"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { RotateCw } from "lucide-react";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import PageHeading from "@/components/shared/PageHeading";
import { useToast } from "@/stores/ToastProvider";
import AutofillVaultPanel from "./AutofillVaultPanel";
import SetupStepRow from "./SetupStepRow";

export default function ProfileScreen() {
  const { data: profile } = useSuspenseQuery(workspaceQueries.profile);
  const pushToast = useToast();

  function rerunGuidedSetup() {
    pushToast("Guided setup restarts with your answers pre-filled", {
      kind: "info",
    });
  }

  return (
    <div className="max-w-195">
      <PageHeading
        eyebrow="☰ SET UP ONCE"
        title="Your profile"
        description="Fill this in once. Everything the agent does — matching, tailoring, applying — runs off what’s here."
      />

      <ol aria-label="Profile setup" className="flex flex-col gap-3">
        {profile.setupSteps.map((step, index) => (
          <SetupStepRow key={step.id} step={step} stepNumber={index + 1} />
        ))}
      </ol>
      <button
        type="button"
        onClick={rerunGuidedSetup}
        className="mt-3.5 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#1E4A7A] hover:underline"
      >
        <RotateCw aria-hidden="true" className="size-3.5" />
        Re-run guided setup
      </button>

      <AutofillVaultPanel fields={profile.vaultFields} />
    </div>
  );
}
