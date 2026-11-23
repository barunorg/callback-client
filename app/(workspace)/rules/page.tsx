import type { Metadata } from "next";
import AutomationRulesScreen from "./components/AutomationRulesScreen";

export const metadata: Metadata = { title: "Automation rules · Callback" };

export default function AutomationRulesPage() {
  return <AutomationRulesScreen />;
}
