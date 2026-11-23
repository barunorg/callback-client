import type { PortfolioItem } from "@/types/workspace/documents";
import Panel from "@/components/shared/Panel";

export default function PortfolioPanel({ items }: { items: PortfolioItem[] }) {
  return (
    <Panel
      title="Portfolio & references"
      description="The links and people applications ask for — ready to drop in, no scramble."
    >
      <ul className="flex flex-col gap-2.25">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-2.75 rounded-lg border border-[#E6E1D5] bg-white px-3.25 py-2.75"
          >
            <span className="shrink-0 rounded-sm bg-[#EDEAE0] px-2 py-1 text-[10px] font-extrabold tracking-[0.04em] text-[#6B7A6E]">
              {item.kind}
            </span>
            <span className="min-w-0 flex-1 text-xs font-semibold">
              {item.name}
            </span>
            <span className="shrink-0 text-[11px] text-[#6B7A6E]">
              {item.meta}
            </span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
