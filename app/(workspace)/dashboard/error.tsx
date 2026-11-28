"use client";

import ScreenError from "@/components/shared/ScreenError";

export default function DashboardError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <ScreenError title="Dashboard couldn’t load" error={error} retry={retry} />
  );
}
