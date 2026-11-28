"use client";

import ScreenError from "@/components/shared/ScreenError";

export default function OnboardingError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <main className="grid min-h-svh place-items-center bg-[#EFECE4] p-6 text-[#141C17]">
      <ScreenError title="Setup couldn’t load" error={error} retry={retry} />
    </main>
  );
}
