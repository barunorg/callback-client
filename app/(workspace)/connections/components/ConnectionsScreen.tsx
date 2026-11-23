"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import PageHeading from "@/components/shared/PageHeading";
import IntegrationCard from "./IntegrationCard";

export default function ConnectionsScreen() {
  const { data: integrations } = useSuspenseQuery(workspaceQueries.connections);

  return (
    <div className="max-w-230">
      <PageHeading
        eyebrow="◈ WHAT YOU ALREADY HAVE"
        title="Connections"
        description="Plug in what you already have — every connection makes applications smarter. Read-only, disconnect anytime, nothing ever posts as you."
      />

      <ul className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
        {integrations.map((integration) => (
          <li key={integration.key} className="flex">
            <IntegrationCard integration={integration} />
          </li>
        ))}
      </ul>
    </div>
  );
}
