import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const pillVariants = cva(
  "inline-flex shrink-0 items-center rounded-full px-2.25 py-0.75 text-[11px] font-bold tracking-[0.02em]",
  {
    variants: {
      tone: {
        green: "bg-[#EFF5EF] text-[#1E7A4F]",
        blue: "bg-[#E9F0F8] text-[#1E4A7A]",
        amber: "bg-[#FFF7E6] text-[#B4762A]",
        red: "bg-[#FBEAE7] text-[#B4483A]",
        neutral: "bg-[#EDEAE0] text-[#6B7A6E]",
        dark: "bg-[#141C17] text-[#8FE388]",
        onDark: "bg-[#8FE388]/12 text-[#8FE388]",
      },
    },
    defaultVariants: { tone: "green" },
  },
);

export default function Pill({
  children,
  tone,
  className,
}: VariantProps<typeof pillVariants> & {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn(pillVariants({ tone }), className)}>{children}</span>
  );
}
