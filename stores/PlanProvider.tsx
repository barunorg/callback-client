"use client";

import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useState, type ReactNode } from "react";
import { useInvalidatingMutation } from "@/hooks/useInvalidatingMutation";
import * as workspaceApi from "@/lib/api/workspaceApi";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import { FREE_DAILY_CAP, PRO_DAILY_CAP } from "@/lib/constants/plans";
import type { Account } from "@/types/workspace/account";
import UpgradeModal from "@/components/partial/workspace/UpgradeModal";
import { useToast } from "./ToastProvider";

type PlanContextValue = {
  account: Account | undefined;
  isPro: boolean;
  sentToday: number;
  dailyCap: number;
  remainingSends: number;
  openUpgrade: (reason: string) => void;
};

const PlanContext = createContext<PlanContextValue | null>(null);

export function usePlan() {
  const plan = useContext(PlanContext);
  if (!plan) throw new Error("usePlan must be used inside PlanProvider");
  return plan;
}

export default function PlanProvider({ children }: { children: ReactNode }) {
  const pushToast = useToast();
  const { data: account } = useQuery(workspaceQueries.account);
  const [upgradeReason, setUpgradeReason] = useState<string | null>(null);

  const upgrade = useInvalidatingMutation({
    mutationFn: workspaceApi.upgradePlan,
    invalidate: [workspaceQueries.account.queryKey],
    onSuccess: () => {
      setUpgradeReason(null);
      pushToast("Pro unlocked — daily cap raised to 25, Agent mode available");
    },
  });

  const isPro = account?.isPro ?? false;
  const sentToday = account?.sentToday ?? 0;
  const dailyCap = isPro ? PRO_DAILY_CAP : FREE_DAILY_CAP;

  const plan: PlanContextValue = {
    account,
    isPro,
    sentToday,
    dailyCap,
    remainingSends: Math.max(0, dailyCap - sentToday),
    openUpgrade: setUpgradeReason,
  };

  return (
    <PlanContext value={plan}>
      {children}
      {upgradeReason && (
        <UpgradeModal
          reason={upgradeReason}
          isUpgrading={upgrade.isPending}
          onUpgrade={() => upgrade.mutate()}
          onClose={() => setUpgradeReason(null)}
        />
      )}
    </PlanContext>
  );
}
