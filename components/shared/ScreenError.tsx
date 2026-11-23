"use client";

import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { CircleAlert } from "lucide-react";
import { useEffect } from "react";
import ActionButton from "./ActionButton";

/**
 * Fallback for each route's error.tsx. Retrying resets failed TanStack
 * queries first, then asks Next.js to re-render the segment.
 */
export default function ScreenError({
  title,
  error,
  retry,
}: {
  title: string;
  error: unknown;
  retry: () => void;
}) {
  const { reset: resetFailedQueries } = useQueryErrorResetBoundary();

  useEffect(() => {
    console.error(error);
  }, [error]);

  function tryAgain() {
    resetFailedQueries();
    retry();
  }

  return (
    <section
      role="alert"
      className="max-w-140 rounded-[14px] border border-[#E0BFB8] bg-[#FBFAF7] p-6"
    >
      <CircleAlert aria-hidden="true" className="mb-3 size-6 text-[#B4483A]" />
      <h1 className="font-heading text-xl font-bold">{title}</h1>
      <p className="mt-1.5 mb-4 text-[13px] leading-normal text-[#6B7A6E]">
        Something went wrong while loading this page. The rest of your workspace
        still works — try again in a moment.
      </p>
      <ActionButton onClick={tryAgain}>Try again</ActionButton>
    </section>
  );
}
