"use client";

import ScreenError from "@/components/shared/ScreenError";

export default function DocumentsError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <ScreenError title="Documents couldn’t load" error={error} retry={retry} />
  );
}
