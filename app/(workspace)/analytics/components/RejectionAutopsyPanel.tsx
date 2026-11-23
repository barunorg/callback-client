"use client";

import { useInvalidatingMutation } from "@/hooks/useInvalidatingMutation";
import * as workspaceApi from "@/lib/api/workspaceApi";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import type { AutopsyItem } from "@/types/workspace/analytics";
import Panel from "@/components/shared/Panel";
import { useToast } from "@/stores/ToastProvider";
import AutopsyRow from "./AutopsyRow";

export default function RejectionAutopsyPanel({
  autopsies,
}: {
  autopsies: AutopsyItem[];
}) {
  const pushToast = useToast();

  const applyFix = useInvalidatingMutation({
    mutationFn: workspaceApi.applyAutopsyFix,
    invalidate: [workspaceQueries.analytics.queryKey],
    onSuccess: () => {
      pushToast("Fix applied — pipeline numbers now open every message");
    },
  });

  return (
    <Panel
      title="This week’s rejection autopsy"
      aside={
        <span className="text-[11.5px] text-[#6B7A6E]">
          every silence gets a cause of death — then a fix
        </span>
      }
      className="mt-3.5 p-5.5"
    >
      <ul className="flex flex-col gap-2.25">
        {autopsies.map((item) => (
          <AutopsyRow
            key={item.id}
            item={item}
            isApplying={applyFix.isPending && applyFix.variables === item.id}
            onApprove={() => applyFix.mutate(item.id)}
          />
        ))}
      </ul>
    </Panel>
  );
}
