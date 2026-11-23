"use client";

import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { useInvalidatingMutation } from "@/hooks/useInvalidatingMutation";
import * as workspaceApi from "@/lib/api/workspaceApi";
import { workspaceQueries } from "@/lib/api/workspaceQueries";
import { workspaceNavigation } from "@/lib/constants/workspaceNavigation";
import DesktopSidebar from "./DesktopSidebar";
import MobileHeader from "./MobileHeader";
import MobileNavDrawer from "./MobileNavDrawer";
import NotificationBell from "./NotificationBell";
import NotificationCenter from "./NotificationCenter";

export default function WorkspaceShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const activeSlug = pathname.split("/").filter(Boolean).at(-1) ?? "dashboard";
  const activeLabel =
    workspaceNavigation.find(({ slug }) => slug === activeSlug)?.label ??
    "Dashboard";

  const { data: notifications = [], isPending: isNotificationsLoading } =
    useQuery(workspaceQueries.notifications);
  const unreadCount = notifications.filter(({ isRead }) => !isRead).length;
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const markRead = useInvalidatingMutation({
    mutationFn: workspaceApi.markNotificationRead,
    invalidate: [workspaceQueries.notifications.queryKey],
  });
  const markAllRead = useInvalidatingMutation({
    mutationFn: workspaceApi.markAllNotificationsRead,
    invalidate: [workspaceQueries.notifications.queryKey],
  });

  function toggleNotifications() {
    setIsNotificationOpen((isOpen) => !isOpen);
  }

  return (
    <div className="min-h-svh bg-[#EFECE4] text-[#141C17]">
      <DesktopSidebar activeSlug={activeSlug} />

      <MobileHeader
        activeLabel={activeLabel}
        unreadCount={unreadCount}
        isNotificationOpen={isNotificationOpen}
        onMenuClick={() => setIsMobileNavOpen(true)}
        onBellClick={toggleNotifications}
      />
      {isMobileNavOpen && (
        <MobileNavDrawer
          activeSlug={activeSlug}
          onClose={() => setIsMobileNavOpen(false)}
        />
      )}

      <NotificationBell
        unreadCount={unreadCount}
        isOpen={isNotificationOpen}
        onClick={toggleNotifications}
        className="fixed top-4 right-6 z-80 hidden lg:grid"
      />
      {isNotificationOpen && (
        <NotificationCenter
          notifications={notifications}
          isLoading={isNotificationsLoading}
          onMarkRead={(id) => markRead.mutate(id)}
          onMarkAllRead={() => markAllRead.mutate()}
          onClose={() => setIsNotificationOpen(false)}
        />
      )}

      <main className="min-w-0 px-4 py-6 sm:px-7 lg:py-8 lg:pr-10 lg:pl-26">
        {children}
      </main>
    </div>
  );
}
