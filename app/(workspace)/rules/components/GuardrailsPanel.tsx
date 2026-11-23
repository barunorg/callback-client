import type { GuardrailRule } from "@/types/workspace/rules";
import Panel from "@/components/shared/Panel";

export default function GuardrailsPanel({
  guardrails,
}: {
  guardrails: GuardrailRule[];
}) {
  return (
    <Panel titleClassName="text-[15px]" title="Guardrails">
      <ul className="grid grid-cols-1 gap-2.75 sm:grid-cols-2">
        {guardrails.map((rule) => (
          <li
            key={rule.id}
            className="flex items-center justify-between gap-2.5 rounded-lg border border-[#E6E1D5] bg-white px-3.5 py-3"
          >
            <span className="min-w-0">
              <span className="block text-[12.5px] font-semibold">
                {rule.label}
              </span>
              <span className="mt-px block text-[11px] text-[#6B7A6E]">
                {rule.detail}
              </span>
            </span>
            <span className="shrink-0 rounded-[7px] bg-[#EFF5EF] px-2.5 py-1.25 text-[12.5px] font-bold text-[#1E7A4F]">
              {rule.value}
            </span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
