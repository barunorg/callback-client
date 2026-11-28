import type { Metadata } from "next";
import ClientOnly from "@/components/shared/ClientOnly";
import AutomationRulesScreen from "./components/AutomationRulesScreen";
import AutomationRulesSkeleton from "./components/AutomationRulesSkeleton";

export const metadata: Metadata = { title: "Automation rules" };

// Data is per-user, so the screen renders (and fetches) only in the browser.
// The static HTML shows the matching skeleton instead.
export default function AutomationRulesPage() {
  return (
    <ClientOnly fallback={<AutomationRulesSkeleton />}>
      <AutomationRulesScreen />
    </ClientOnly>
  );
}
