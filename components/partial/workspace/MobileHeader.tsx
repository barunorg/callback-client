import Link from "next/link";
import { Menu } from "lucide-react";
import BrandMark from "@/components/icons/BrandMark";
import NotificationBell from "./NotificationBell";

export default function MobileHeader({
  activeLabel,
  unreadCount,
  isNotificationOpen,
  onMenuClick,
  onBellClick,
}: {
  activeLabel: string;
  unreadCount: number;
  isNotificationOpen: boolean;
  onMenuClick: () => void;
  onBellClick: () => void;
}) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-3 border-b border-[#DED9CC] bg-[#EFECE4]/95 px-4 backdrop-blur lg:hidden">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          aria-label="Open navigation"
          onClick={onMenuClick}
          className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#DED9CC] bg-[#FBFAF7]"
        >
          <Menu aria-hidden="true" className="size-5" />
        </button>
        <Link
          href="/dashboard/"
          aria-label="Callback dashboard"
          className="flex items-center gap-2"
        >
          <BrandMark className="size-8 rounded-[9px]" />
          <span className="font-heading text-base font-bold">Callback</span>
        </Link>
      </div>
      <span className="truncate text-sm font-semibold">{activeLabel}</span>
      <NotificationBell
        unreadCount={unreadCount}
        isOpen={isNotificationOpen}
        onClick={onBellClick}
        className="grid size-10"
      />
    </header>
  );
}
