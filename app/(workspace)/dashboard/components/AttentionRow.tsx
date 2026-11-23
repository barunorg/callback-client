import Link from "next/link";
import type { AttentionItem } from "@/types/workspace/dashboard";

export default function AttentionRow({ item }: { item: AttentionItem }) {
  return (
    <li>
      <Link
        href={item.href}
        className="group flex items-center gap-3 rounded-lg border border-[#E6E1D5] bg-white px-3.25 py-2.75 transition-[border-color,box-shadow] hover:border-[#B8B19E] hover:shadow-[0_2px_10px_-6px_rgba(15,31,22,.25)]"
      >
        <span
          aria-hidden="true"
          className="size-2 shrink-0 rounded-full"
          style={{ backgroundColor: item.dotColor }}
        />
        <span className="min-w-0 flex-1">
          <span className="block text-[13px] font-semibold">{item.title}</span>
          <span className="block text-[11.5px] text-[#6B7A6E]">
            {item.detail}
          </span>
        </span>
        <span className="shrink-0 rounded-md border border-[#CFC9BA] bg-white px-3 py-1.5 text-xs font-semibold transition-colors group-hover:bg-[#F0EDE4]">
          {item.actionLabel}
        </span>
      </Link>
    </li>
  );
}
