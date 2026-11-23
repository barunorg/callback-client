import type { Metadata } from "next";
import ToastProvider from "@/stores/ToastProvider";
import OnboardingFlow from "./components/OnboardingFlow";

// Personal setup after sign-up — keep it out of search results.
export const metadata: Metadata = {
  title: "Guided setup",
  robots: { index: false, follow: false },
};

export default function OnboardingPage() {
  return (
    // Toasts sit above the fixed Back / Continue footer so they never cover it.
    <ToastProvider viewportClassName="bottom-24">
      <OnboardingFlow />
    </ToastProvider>
  );
}
