"use client";

import ScreenError from "@/components/shared/ScreenError";

export default function AnalyticsError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <ScreenError title="Analytics couldn’t load" error={error} retry={retry} />
  );
}
