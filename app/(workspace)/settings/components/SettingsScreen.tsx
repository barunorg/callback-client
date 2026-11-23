"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import PageHeading from "@/components/shared/PageHeading";
import AccountPanel from "./AccountPanel";
import PaymentPanel from "./PaymentPanel";
import PlanPanel from "./PlanPanel";
import QuickLinksPanel from "./QuickLinksPanel";

export default function SettingsScreen() {
  const { data: settings } = useSuspenseQuery(workspaceQueries.settings);

  return (
    <div className="max-w-220">
      <PageHeading
        eyebrow="❖ PLAN & ACCOUNT"
        title="Settings & billing"
        description="Plan, payment, account. No dark patterns, no “are you sure” mazes — cancel is one click."
      />

      <div className="grid grid-cols-1 items-start gap-3.5 lg:grid-cols-2">
        <PlanPanel usage={settings.usage} renewsOn={settings.renewsOn} />
        <PaymentPanel
          card={settings.card}
          billingHistory={settings.billingHistory}
        />
        <AccountPanel
          email={settings.email}
          isEmailVerified={settings.isEmailVerified}
          isAgentPaused={settings.isAgentPaused}
        />
        <QuickLinksPanel />
      </div>
    </div>
  );
}
