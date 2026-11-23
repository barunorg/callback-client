import type { ReactNode } from "react";
import WorkspaceShell from "@/components/partial/workspace/WorkspaceShell";
import WorkspaceProviders from "@/stores/WorkspaceProviders";

export default function WorkspaceLayout({ children }: { children: ReactNode }) {
  return (
    <WorkspaceProviders>
      <WorkspaceShell>{children}</WorkspaceShell>
    </WorkspaceProviders>
  );
}
