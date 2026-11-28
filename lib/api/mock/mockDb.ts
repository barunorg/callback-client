import { accountFixture } from "./data/workspace/account";
import { analyticsFixture } from "./data/workspace/analytics";
import { careerFixture } from "./data/workspace/career";
import { connectionsFixture } from "./data/workspace/connections";
import { dashboardFixture } from "./data/workspace/dashboard";
import { documentsFixture } from "./data/workspace/documents";
import { gigsFixture } from "./data/workspace/gigs";
import { matchesFixture } from "./data/workspace/matches";
import { notificationsFixture } from "./data/workspace/notifications";
import { planComparisonFixture } from "./data/workspace/plans";
import { profileFixture } from "./data/workspace/profile";
import { queueFixture } from "./data/workspace/queue";
import { referralsFixture } from "./data/workspace/referrals";
import { rulesFixture } from "./data/workspace/rules";
import { settingsFixture } from "./data/workspace/settings";
import { interviewPrepFixture, trackerFixture } from "./data/workspace/tracker";

/**
 * In-memory "database" for the mock API. Writes change it, so refetches
 * return the updated data until the page is reloaded.
 */
export const mockDb = structuredClone({
  account: accountFixture,
  queue: queueFixture,
  notifications: notificationsFixture,
  dashboard: dashboardFixture,
  matches: matchesFixture,
  tracker: trackerFixture,
  interviewPrep: interviewPrepFixture,
  analytics: analyticsFixture,
  documents: documentsFixture,
  connections: connectionsFixture,
  referrals: referralsFixture,
  gigs: gigsFixture,
  career: careerFixture,
  rules: rulesFixture,
  profile: profileFixture,
  settings: settingsFixture,
  planComparison: planComparisonFixture,
});
