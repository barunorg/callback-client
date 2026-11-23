import type { AttentionItem } from "@/types/workspace/dashboard";
import Panel from "@/components/shared/Panel";
import AttentionRow from "./AttentionRow";

export default function AttentionList({ items }: { items: AttentionItem[] }) {
  return (
    <Panel
      title="Needs your attention"
      aside={
        <span className="text-[11.5px] text-[#6B7A6E]">
          deadlines within 48h float to top
        </span>
      }
    >
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <AttentionRow key={item.id} item={item} />
        ))}
      </ul>
    </Panel>
  );
}
