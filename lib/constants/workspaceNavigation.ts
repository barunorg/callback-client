import {
  BriefcaseBusiness,
  ChartColumn,
  CircleDot,
  FileText,
  House,
  Kanban,
  Link,
  Send,
  Settings,
  SlidersHorizontal,
  TrendingUp,
  UserRound,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export const workspaceNavigation = [
  { slug: "dashboard", label: "Dashboard", icon: House },
  { slug: "matches", label: "Matches", icon: CircleDot },
  { slug: "queue", label: "Review queue", icon: Send },
  { slug: "tracker", label: "Tracker", icon: Kanban },
  { slug: "analytics", label: "Analytics", icon: ChartColumn },
  { slug: "documents", label: "Documents", icon: FileText },
  { slug: "connections", label: "Connections", icon: Link },
  { slug: "referrals", label: "Referrals", icon: UsersRound },
  { slug: "gigs", label: "Gigs", icon: BriefcaseBusiness },
  { slug: "career", label: "Career mode", icon: TrendingUp },
  { slug: "rules", label: "Automation rules", icon: SlidersHorizontal },
  { slug: "profile", label: "Profile", icon: UserRound },
  { slug: "settings", label: "Settings & billing", icon: Settings },
] as const satisfies readonly {
  slug: string;
  label: string;
  icon: LucideIcon;
}[];

export type WorkspaceNavItem = (typeof workspaceNavigation)[number];
export type WorkspaceSection = WorkspaceNavItem["slug"];
