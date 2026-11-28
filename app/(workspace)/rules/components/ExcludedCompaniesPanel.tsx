"use client";

import { useInvalidatingMutation } from "@/hooks/useInvalidatingMutation";
import * as workspaceApi from "@/lib/api/workspaceApi";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import type { ExcludedCompany } from "@/types/workspace/rules";
import ActionButton from "@/components/shared/ActionButton";
import Panel from "@/components/shared/Panel";
import { useToast } from "@/stores/ToastProvider";
import ExcludedCompanyChip from "./ExcludedCompanyChip";

export default function ExcludedCompaniesPanel({
  companies,
}: {
  companies: ExcludedCompany[];
}) {
  const pushToast = useToast();

  const removeCompany = useInvalidatingMutation({
    mutationFn: (company: ExcludedCompany) =>
      workspaceApi.removeExcludedCompany(company.id),
    invalidate: [workspaceQueries.rules.queryKey],
    onSuccess: (_result, company) => {
      pushToast(
        `${company.name} un-blocked — it can surface in matches again`,
        {
          kind: "info",
        },
      );
    },
  });

  // Hide the chip right away while the mock request runs.
  const visibleCompanies = removeCompany.isPending
    ? companies.filter((company) => company.id !== removeCompany.variables.id)
    : companies;

  function showAddHint() {
    pushToast(
      "Type a company name — the agent excludes it and every subdomain from now on",
      { kind: "info" },
    );
  }

  return (
    <Panel
      titleClassName="text-[15px]"
      title="Excluded companies"
      aside={
        <span className="text-[11.5px] text-[#6B7A6E]">
          the agent never applies here
        </span>
      }
      description="Your manual block list — on top of the automatic ghost shield. Hide your current employer, body-shops, or anywhere you’d rather not surface."
    >
      <ul className="flex flex-wrap gap-2">
        {visibleCompanies.map((company) => (
          <li key={company.id}>
            <ExcludedCompanyChip
              company={company}
              onRemove={() => removeCompany.mutate(company)}
            />
          </li>
        ))}
        <li>
          <ActionButton
            variant="dashed"
            className="rounded-full px-3.25 py-2 font-semibold"
            onClick={showAddHint}
          >
            + Add company
          </ActionButton>
        </li>
      </ul>
    </Panel>
  );
}
