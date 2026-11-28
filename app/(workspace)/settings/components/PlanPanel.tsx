"use client";

import * as workspaceApi from "@/lib/api/workspaceApi";
import type { SettingsData } from "@/types/workspace/settings";
import ActionButton from "@/components/shared/ActionButton";
import Panel from "@/components/shared/Panel";
import Pill from "@/components/shared/Pill";
import { usePlan } from "@/stores/PlanProvider";
import { useToast } from "@/stores/ToastProvider";

export default function PlanPanel({
  usage,
  renewsOn,
}: {
  usage: SettingsData["usage"];
  renewsOn: string;
}) {
  const { isPro, openUpgrade } = usePlan();
  const pushToast = useToast();

  async function managePlan() {
    await workspaceApi.managePlan();
    pushToast("Plan management — switch to Placement+ or yearly billing", {
      kind: "info",
    });
  }

  async function cancelPlan() {
    await workspaceApi.cancelPlan();
    pushToast("No guilt trip: cancellation link sent to your email", {
      kind: "info",
    });
  }

  const usageRows = [
    {
      label: "Applications sent this month",
      value: String(usage.applicationsThisMonth),
    },
    { label: "Referral drafts used", value: String(usage.referralDraftsUsed) },
    {
      label: "AI mock interviews",
      value: isPro
        ? `${usage.mockInterviewsThisMonth} this month`
        : "Pro feature",
    },
  ];

  return (
    <Panel
      titleClassName="text-[15px]"
      title="Your plan"
      aside={
        <Pill
          tone={isPro ? "dark" : "neutral"}
          className="px-2.75 py-1.25 font-extrabold tracking-wider"
        >
          {isPro ? "PRO" : "FREE"}
        </Pill>
      }
    >
      <p className="mb-1 flex items-baseline gap-1.5">
        <span className="font-heading text-[34px] font-extrabold tracking-[-0.03em]">
          {isPro ? "$9" : "$0"}
        </span>
        <span className="text-[12.5px] text-[#6B7A6E]">
          {isPro ? "/mo · student rate" : "forever"}
        </span>
      </p>
      <p className="mb-3.5 text-xs text-[#6B7A6E]">
        {isPro
          ? `Renews ${renewsOn} · cancel anytime`
          : "5 sends/day · upgrade whenever you’re ready"}
      </p>
      <p className="mb-4 inline-flex items-center rounded-full border border-[#A9C9AF] bg-[#EFF5EF] px-3 py-1.25 text-[11.5px] font-bold text-[#1E7A4F]">
        .edu verified — student rate locked in
      </p>

      <dl className="mb-4 flex flex-col gap-2">
        {usageRows.map((row) => (
          <div
            key={row.label}
            className="flex justify-between gap-2 text-[12.5px]"
          >
            <dt className="text-[#6B7A6E]">{row.label}</dt>
            <dd className="font-bold">{row.value}</dd>
          </div>
        ))}
      </dl>

      {isPro ? (
        <div className="flex gap-2">
          <ActionButton
            variant="light"
            className="flex-1 rounded-lg p-2.75"
            onClick={managePlan}
          >
            Manage plan
          </ActionButton>
          <button
            type="button"
            onClick={cancelPlan}
            className="flex-1 rounded-lg p-2.75 text-[12.5px] font-semibold text-[#6B7A6E] underline hover:text-[#141C17]"
          >
            Cancel — keep data
          </button>
        </div>
      ) : (
        <ActionButton
          size="lg"
          className="w-full rounded-lg p-3 font-extrabold"
          onClick={() => openUpgrade("GO FURTHER, FASTER")}
        >
          Upgrade to Pro — $9/mo
        </ActionButton>
      )}
    </Panel>
  );
}
