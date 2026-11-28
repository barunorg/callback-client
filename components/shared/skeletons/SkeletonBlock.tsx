import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

// shadcn's default `bg-muted` is too faint on the cream panels, so each
// surface gets a tone from the Callback palette.
const toneClasses = {
  canvas: "bg-[#DED9CC]",
  panel: "bg-[#E4E0D4]",
  row: "bg-[#EDEAE0]",
  dark: "bg-white/10",
};

/** shadcn `Skeleton` tinted for the surface it sits on. */
export default function SkeletonBlock({
  tone = "panel",
  className,
}: {
  tone?: keyof typeof toneClasses;
  className?: string;
}) {
  return <Skeleton className={cn(toneClasses[tone], className)} />;
}
