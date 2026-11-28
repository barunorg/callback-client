import type { Metadata } from "next";
import ClientOnly from "@/components/shared/ClientOnly";
import SettingsScreen from "./components/SettingsScreen";
import SettingsSkeleton from "./components/SettingsSkeleton";

export const metadata: Metadata = { title: "Settings & billing" };

// Data is per-user, so the screen renders (and fetches) only in the browser.
// The static HTML shows the matching skeleton instead.
export default function SettingsPage() {
  return (
    <ClientOnly fallback={<SettingsSkeleton />}>
      <SettingsScreen />
    </ClientOnly>
  );
}
