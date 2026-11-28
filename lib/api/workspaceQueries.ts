import { queryOptions } from "@tanstack/react-query";
import * as workspaceApi from "./workspaceApi";

// Shared query keys + fetchers (TanStack Query `queryOptions` pattern).
// Use with `useSuspenseQuery` in screens, `useQuery` in the shell, and
// `queryClient.invalidateQueries({ queryKey })` after a mutation.
export const workspaceQueries = {
  account: queryOptions({
    queryKey: ["workspace", "account"],
    queryFn: workspaceApi.getAccount,
  }),
  planComparison: queryOptions({
    queryKey: ["workspace", "plan-comparison"],
    queryFn: workspaceApi.getPlanComparison,
  }),
  queue: queryOptions({
    queryKey: ["workspace", "queue"],
    queryFn: workspaceApi.getQueue,
  }),
  notifications: queryOptions({
    queryKey: ["workspace", "notifications"],
    queryFn: workspaceApi.getNotifications,
  }),
  dashboard: queryOptions({
    queryKey: ["workspace", "dashboard"],
    queryFn: workspaceApi.getDashboard,
  }),
  matches: queryOptions({
    queryKey: ["workspace", "matches"],
    queryFn: workspaceApi.getMatches,
  }),
  tracker: queryOptions({
    queryKey: ["workspace", "tracker"],
    queryFn: workspaceApi.getTracker,
  }),
  interviewPrep: queryOptions({
    queryKey: ["workspace", "interview-prep"],
    queryFn: workspaceApi.getInterviewPrep,
  }),
  analytics: queryOptions({
    queryKey: ["workspace", "analytics"],
    queryFn: workspaceApi.getAnalytics,
  }),
  documents: queryOptions({
    queryKey: ["workspace", "documents"],
    queryFn: workspaceApi.getDocuments,
  }),
  connections: queryOptions({
    queryKey: ["workspace", "connections"],
    queryFn: workspaceApi.getConnections,
  }),
  referrals: queryOptions({
    queryKey: ["workspace", "referrals"],
    queryFn: workspaceApi.getReferrals,
  }),
  gigs: queryOptions({
    queryKey: ["workspace", "gigs"],
    queryFn: workspaceApi.getGigs,
  }),
  career: queryOptions({
    queryKey: ["workspace", "career"],
    queryFn: workspaceApi.getCareer,
  }),
  rules: queryOptions({
    queryKey: ["workspace", "rules"],
    queryFn: workspaceApi.getRules,
  }),
  profile: queryOptions({
    queryKey: ["workspace", "profile"],
    queryFn: workspaceApi.getProfile,
  }),
  settings: queryOptions({
    queryKey: ["workspace", "settings"],
    queryFn: workspaceApi.getSettings,
  }),
};
