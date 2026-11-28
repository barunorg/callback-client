import type { Metadata } from "next";
import type { ReactNode } from "react";
import WorkspaceShell from "@/components/partial/workspace/WorkspaceShell";
import WorkspaceProviders from "@/stores/WorkspaceProviders";

// The signed-in workspace is personal, so keep it out of search results.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function WorkspaceLayout({ children }: { children: ReactNode }) {
  return (
    <WorkspaceProviders>
      <WorkspaceShell>{children}</WorkspaceShell>
    </WorkspaceProviders>
  );
}
