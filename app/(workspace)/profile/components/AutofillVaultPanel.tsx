import type { VaultField } from "@/types/workspace/profile";
import Panel from "@/components/shared/Panel";
import Pill from "@/components/shared/Pill";
import VaultFieldRow from "./VaultFieldRow";

export default function AutofillVaultPanel({
  fields,
}: {
  fields: VaultField[];
}) {
  const filledCount = fields.filter(
    ({ status }) => status === "SET" || status === "AUTO",
  ).length;

  return (
    <Panel
      title="Autofill vault — answer once, everywhere"
      aside={
        <Pill tone="green" className="px-2.75 py-1">
          {filledCount} of {fields.length} filled
        </Pill>
      }
      description={
        <span className="block max-w-155">
          The 20 fields every ATS re-asks — typed once here, filled the same way
          on every form. The stuff that makes manual applying soul-crushing.
        </span>
      }
      className="mt-5"
    >
      <dl className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {fields.map((field) => (
          <VaultFieldRow key={field.id} field={field} />
        ))}
      </dl>
      <p className="mt-3 text-[11px] leading-normal text-[#9A9384]">
        Demographic / EEO answers are optional and only used where legally
        requested — off by default.
      </p>
    </Panel>
  );
}
