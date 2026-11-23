import Link from "next/link";
import BrandMark from "@/components/icons/BrandMark";
import { cn } from "@/lib/utils";

export default function SidebarBrand({ isExpanded }: { isExpanded: boolean }) {
  return (
    <Link
      href="/dashboard/"
      aria-label="Callback dashboard"
      className="flex items-center gap-2.75 px-0.5 pt-0.5 pb-4.5 whitespace-nowrap text-[#E9EFE9]"
    >
      <BrandMark className="size-9 rounded-[10px] text-lg" />
      <span
        className={cn(
          "transition-opacity duration-150",
          isExpanded ? "opacity-100" : "opacity-0",
        )}
      >
        <span className="block font-heading text-[17px] font-bold tracking-[-0.02em]">
          Callback
        </span>
        <span className="block text-[10px] tracking-[0.04em] text-[#E9EFE9]/50">
          YOU STUDY. IT APPLIES.
        </span>
      </span>
    </Link>
  );
}
