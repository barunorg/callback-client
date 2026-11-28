import type { Metadata } from "next";
import ClientOnly from "@/components/shared/ClientOnly";
import CareerModeScreen from "./components/CareerModeScreen";
import CareerModeSkeleton from "./components/CareerModeSkeleton";

export const metadata: Metadata = { title: "Career mode" };

// Data is per-user, so the screen renders (and fetches) only in the browser.
// The static HTML shows the matching skeleton instead.
export default function CareerModePage() {
  return (
    <ClientOnly fallback={<CareerModeSkeleton />}>
      <CareerModeScreen />
    </ClientOnly>
  );
}
