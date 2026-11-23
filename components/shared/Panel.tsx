import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Panel({
  title,
  aside,
  description,
  tone = "light",
  className,
  titleClassName,
  children,
}: {
  title?: ReactNode;
  aside?: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
  titleClassName?: string;
  children: ReactNode;
}) {
  const isDark = tone === "dark";

  return (
    <section
      className={cn(
        "rounded-[14px] border p-5",
        isDark
          ? "border-[#0F1F16] bg-[#0F1F16] bg-[radial-gradient(rgba(255,255,255,.03)_.5px,transparent_.5px)] bg-size-[3px_3px] text-[#E9EFE9]"
          : "border-[#DED9CC] bg-[#FBFAF7]",
        className,
      )}
    >
      {(title || aside) && (
        <header
          className={cn(
            "flex flex-wrap items-baseline justify-between gap-3",
            description ? "mb-1" : "mb-3.5",
          )}
        >
          {title && (
            <h2
              className={cn(
                "font-heading text-base font-semibold",
                titleClassName,
              )}
            >
              {title}
            </h2>
          )}
          {aside}
        </header>
      )}
      {description && (
        <p
          className={cn(
            "mb-3.5 text-xs leading-normal",
            isDark ? "text-[#E9EFE9]/60" : "text-[#6B7A6E]",
          )}
        >
          {description}
        </p>
      )}
      {children}
    </section>
  );
}
