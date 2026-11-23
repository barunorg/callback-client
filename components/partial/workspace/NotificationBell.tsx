import { Bell } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NotificationBell({
  unreadCount,
  isOpen,
  onClick,
  className,
}: {
  unreadCount: number;
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={
        unreadCount > 0
          ? `Notifications, ${unreadCount} unread`
          : "Notifications"
      }
      aria-expanded={isOpen}
      onClick={onClick}
      className={cn(
        "relative size-10.5 shrink-0 place-items-center rounded-full border border-[#DED9CC] bg-[#FBFAF7] shadow-[0_4px_14px_-6px_rgba(15,31,22,.25)] hover:bg-[#F0EDE4]",
        className,
      )}
    >
      <Bell aria-hidden="true" strokeWidth={1.7} className="size-4.5" />
      {unreadCount > 0 && (
        <span className="absolute -top-0.75 -right-0.75 grid h-4.25 min-w-4.25 place-items-center rounded-full bg-[#B4483A] px-1 text-[10px] font-extrabold text-white">
          {unreadCount}
        </span>
      )}
    </button>
  );
}
