"use client";

import ScreenError from "@/components/shared/ScreenError";

export default function ReferralsError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <ScreenError title="Referrals couldn’t load" error={error} retry={retry} />
  );
}
