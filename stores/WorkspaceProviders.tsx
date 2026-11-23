"use client";

import type { ReactNode } from "react";
import PlanProvider from "./PlanProvider";
import ToastProvider from "./ToastProvider";

export default function WorkspaceProviders({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ToastProvider>
      <PlanProvider>{children}</PlanProvider>
    </ToastProvider>
  );
}
