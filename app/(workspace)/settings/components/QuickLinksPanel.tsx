import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Panel from "@/components/shared/Panel";

const quickLinks = [
  { label: "Notifications & email preferences", href: "/rules/" },
  { label: "Connections — GitHub, LinkedIn, Gmail", href: "/connections/" },
  { label: "Automation rules & quiet hours", href: "/rules/" },
];

export default function QuickLinksPanel() {
  return (
    <Panel titleClassName="text-[15px]" title="Quick links">
      <nav aria-label="Quick links" className="flex flex-col gap-2">
        {quickLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="flex items-center justify-between gap-3 rounded-lg border border-[#E6E1D5] bg-white px-3.5 py-3 text-[12.5px] font-semibold text-[#141C17] hover:bg-[#F3F1E9]"
          >
            {link.label}
            <ArrowRight
              aria-hidden="true"
              className="size-3.5 shrink-0 text-[#9A9384]"
            />
          </Link>
        ))}
      </nav>
      <p className="mt-3.5 text-[11.5px] leading-[1.55] text-[#9A9384]">
        Your data is yours: connections are read-only, nothing sends without
        your rules, and deletion is immediate and complete.
      </p>
    </Panel>
  );
}
