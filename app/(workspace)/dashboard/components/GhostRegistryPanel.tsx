import { cn } from "@/lib/utils";
import type { DashboardSummary } from "@/types/workspace/dashboard";
import Panel from "@/components/shared/Panel";

export default function GhostRegistryPanel({
  registry,
}: {
  registry: DashboardSummary["ghostRegistry"];
}) {
  const figures = [
    {
      value: registry.flaggedThisWeek,
      label: "flagged this week",
      className: "text-[#F4B942]",
    },
    {
      value: registry.scamsBlocked,
      label: "scams blocked",
      className: "text-[#E05B4B]",
    },
    {
      value: registry.studentsProtecting,
      label: "students protecting each other",
      className: "text-[#8FE388]",
    },
  ];

  return (
    <Panel
      tone="dark"
      title="Ghost registry — network shield"
      description="Every ghosting a student reports trains the shield for all of them. The bigger the network, the harder to haunt."
    >
      <dl className="flex flex-wrap gap-4">
        {figures.map((figure) => (
          <div key={figure.label} className="flex flex-col-reverse">
            <dt className="text-[11px] text-[#E9EFE9]/55">{figure.label}</dt>
            <dd
              className={cn(
                "font-heading text-2xl font-bold",
                figure.className,
              )}
            >
              {figure.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-3.25 rounded-lg bg-white/6 px-3.25 py-2.5 text-[11.5px] leading-normal text-[#E9EFE9]/70">
        Your {registry.yourReports} reports protected{" "}
        <strong className="text-[#8FE388]">
          {registry.studentsProtectedByYou} students
        </strong>
        . “{registry.hiddenCompany}” is now hidden network-wide.
      </p>
    </Panel>
  );
}
