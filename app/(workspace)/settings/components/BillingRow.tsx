"use client";

import * as workspaceApi from "@/lib/api/workspaceApi";
import type { BillingEntry } from "@/types/workspace/settings";
import { useToast } from "@/stores/ToastProvider";

export default function BillingRow({ entry }: { entry: BillingEntry }) {
  const pushToast = useToast();

  async function sendReceipt() {
    await workspaceApi.requestReceipt(entry.id);
    pushToast(`Receipt ${entry.date} — sent to your email`, { kind: "info" });
  }

  return (
    <li className="flex items-center justify-between gap-2 border-b border-[#EFECE4] px-0.5 py-2 text-[12.5px]">
      <span className="text-[#4A554C]">
        {entry.date} · {entry.label}
      </span>
      <span className="flex items-center gap-2.5">
        <strong>{entry.amount}</strong>
        <button
          type="button"
          onClick={sendReceipt}
          className="text-[11.5px] font-semibold text-[#1E4A7A] hover:underline"
        >
          Receipt
        </button>
      </span>
    </li>
  );
}
