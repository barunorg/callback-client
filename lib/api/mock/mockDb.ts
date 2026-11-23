import { accountFixture } from "./data/account";
import { analyticsFixture } from "./data/analytics";
import { careerFixture } from "./data/career";
import { connectionsFixture } from "./data/connections";
import { dashboardFixture } from "./data/dashboard";
import { documentsFixture } from "./data/documents";
import { gigsFixture } from "./data/gigs";
import { matchesFixture } from "./data/matches";
import { notificationsFixture } from "./data/notifications";
import { planComparisonFixture } from "./data/plans";
import { profileFixture } from "./data/profile";
import { queueFixture } from "./data/queue";
import { referralsFixture } from "./data/referrals";
import { rulesFixture } from "./data/rules";
import { settingsFixture } from "./data/settings";
import { interviewPrepFixture, trackerFixture } from "./data/tracker";

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
