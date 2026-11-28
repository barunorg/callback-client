"use client";

import { useInvalidatingMutation } from "@/hooks/useInvalidatingMutation";
import * as workspaceApi from "@/lib/api/workspaceApi";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import ActionButton from "@/components/shared/ActionButton";
import Panel from "@/components/shared/Panel";
import SwitchTrack from "@/components/shared/SwitchTrack";
import { useToast } from "@/stores/ToastProvider";

export default function AccountPanel({
  email,
  isEmailVerified,
  isAgentPaused,
}: {
  email: string;
  isEmailVerified: boolean;
  isAgentPaused: boolean;
}) {
  const pushToast = useToast();

  const pauseAgent = useInvalidatingMutation({
    mutationFn: workspaceApi.setAgentPaused,
    invalidate: [workspaceQueries.settings.queryKey],
    onSuccess: (_result, isPaused) => {
      pushToast(
        isPaused
          ? "Agent paused — sweeps stop, your queue and data stay"
          : "Agent resumed — next sweep in a few minutes",
        { kind: "info" },
      );
    },
  });

  // Show the requested state right away while the mock request runs.
  const isPaused = pauseAgent.isPending ? pauseAgent.variables : isAgentPaused;

  async function changePassword() {
    await workspaceApi.requestPasswordReset();
    pushToast(`Password reset link sent to ${email}`, { kind: "info" });
  }

  async function exportData() {
    await workspaceApi.requestDataExport();
    pushToast("Export started — download link lands in your inbox", {
      kind: "info",
    });
  }

  async function deleteAccount() {
    await workspaceApi.requestAccountDeletion();
    pushToast("Deletion needs email confirmation — check your inbox", {
      kind: "warn",
    });
  }

  return (
    <Panel titleClassName="text-[15px]" title="Account">
      <div className="flex items-center justify-between gap-3 border-b border-[#EFECE4] py-2.5">
        <div>
          <p className="text-[12.5px] font-semibold">{email}</p>
          {isEmailVerified && (
            <p className="text-[11px] font-semibold text-[#1E7A4F]">verified</p>
          )}
        </div>
        <ActionButton variant="light" size="sm" onClick={changePassword}>
          Change password
        </ActionButton>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={isPaused}
        disabled={pauseAgent.isPending}
        onClick={() => pauseAgent.mutate(!isPaused)}
        className="flex w-full items-center gap-3 border-b border-[#EFECE4] py-3 text-left"
      >
        <SwitchTrack isOn={isPaused} onColor="amber" />
        <span>
          <span className="block text-[12.5px] font-semibold">
            {isPaused ? "Agent paused" : "Pause the agent"}
          </span>
          <span className="block text-[11px] text-[#6B7A6E]">
            sweeps stop, queue and data stay — for exam week
          </span>
        </span>
      </button>

      <button
        type="button"
        onClick={exportData}
        className="w-full border-b border-[#EFECE4] py-3 text-left text-[12.5px] font-semibold text-[#1E4A7A] hover:underline"
      >
        Export my data — resumes, messages, history (JSON + PDF)
      </button>
      <button
        type="button"
        onClick={deleteAccount}
        className="w-full pt-3 pb-0.5 text-left text-[12.5px] font-semibold text-[#B4483A] hover:underline"
      >
        Delete account & all data
      </button>
    </Panel>
  );
}
