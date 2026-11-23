"use client";

import * as workspaceApi from "@/lib/api/workspaceApi";
import type { BillingEntry, SettingsData } from "@/types/workspace/settings";
import ActionButton from "@/components/shared/ActionButton";
import Panel from "@/components/shared/Panel";
import { useToast } from "@/stores/ToastProvider";
import BillingRow from "./BillingRow";

export default function PaymentPanel({
  card,
  billingHistory,
}: {
  card: SettingsData["card"];
  billingHistory: BillingEntry[];
}) {
  const pushToast = useToast();

  async function updateCard() {
    await workspaceApi.updatePaymentCard();
    pushToast("Secure card update form opened", { kind: "info" });
  }

  return (
    <Panel titleClassName="text-[15px]" title="Payment & history">
      <div className="mb-3 flex items-center gap-3 rounded-[11px] border border-[#E6E1D5] bg-white px-3.75 py-3.25">
        <span className="shrink-0 rounded-sm bg-[#1E4A7A] px-2 py-1.25 text-[10px] font-extrabold tracking-[0.04em] text-white">
          {card.brand}
        </span>
        <div className="flex-1">
          <p className="text-[13px] font-bold">•••• {card.last4}</p>
          <p className="text-[11px] text-[#6B7A6E]">expires {card.expires}</p>
        </div>
        <ActionButton variant="light" size="sm" onClick={updateCard}>
          Update
        </ActionButton>
      </div>

      <ul aria-label="Billing history" className="flex flex-col gap-1.75">
        {billingHistory.map((entry) => (
          <BillingRow key={entry.id} entry={entry} />
        ))}
      </ul>
    </Panel>
  );
}
