import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const actionButtonVariants = cva("h-auto font-bold", {
  variants: {
    variant: {
      dark: "bg-[#141C17] text-white hover:bg-[#1E7A4F]",
      light: "border-[#CFC9BA] bg-white text-[#141C17] hover:bg-[#F0EDE4]",
      green: "bg-[#1E7A4F] text-white hover:bg-[#186540]",
      accent: "bg-[#8FE388] text-[#0F1F16] hover:bg-[#A7F2A0]",
      blue: "bg-[#1E4A7A] text-white hover:bg-[#183D66]",
      dashed:
        "border-dashed border-[#B8B19E] bg-transparent text-[#6B7A6E] hover:bg-[#F0EDE4]",
      onDark: "border-white/25 bg-transparent text-[#E9EFE9] hover:bg-white/8",
    },
    size: {
      sm: "rounded-md px-3 py-1.75 text-[11.5px]",
      md: "rounded-[9px] px-3.75 py-2.25 text-[12.5px]",
      lg: "rounded-[11px] px-4 py-3.25 text-[13px]",
    },
  },
  defaultVariants: {
    variant: "dark",
    size: "md",
  },
});

/** The app's styled button — the shadcn `Button` with Callback's variants. */
export default function ActionButton({
  variant,
  size,
  className,
  ...buttonProps
}: Omit<ComponentProps<typeof Button>, "variant" | "size"> &
  VariantProps<typeof actionButtonVariants>) {
  return (
    <Button
      className={cn(actionButtonVariants({ variant, size }), className)}
      {...buttonProps}
    />
  );
}
