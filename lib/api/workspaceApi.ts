// Workspace API — currently backed by an in-memory mock (lib/api/mock).
// Every function mirrors a future backend endpoint: replace its body with a
// real `fetch` call, then delete the lib/api/mock folder.

import type { QueueMode } from "@/types/workspace/queue";
import { mockDb } from "./mock/mockDb";
import { mockRequest } from "./mock/mockRequest";

const ok = () => mockRequest({ ok: true });

// ── Reads ────────────────────────────────────────────────────────
export const getAccount = () => mockRequest(mockDb.account);
export const getPlanComparison = () => mockRequest(mockDb.planComparison);
export const getQueue = () => mockRequest(mockDb.queue);
export const getNotifications = () => mockRequest(mockDb.notifications);
export const getDashboard = () => mockRequest(mockDb.dashboard);
export const getMatches = () => mockRequest(mockDb.matches);
export const getTracker = () => mockRequest(mockDb.tracker);
export const getInterviewPrep = () => mockRequest(mockDb.interviewPrep);
export const getAnalytics = () => mockRequest(mockDb.analytics);
export const getDocuments = () => mockRequest(mockDb.documents);
export const getConnections = () => mockRequest(mockDb.connections);
export const getReferrals = () => mockRequest(mockDb.referrals);
export const getGigs = () => mockRequest(mockDb.gigs);
export const getCareer = () => mockRequest(mockDb.career);
export const getRules = () => mockRequest(mockDb.rules);
export const getProfile = () => mockRequest(mockDb.profile);
export const getSettings = () => mockRequest(mockDb.settings);

// ── Account & plan ───────────────────────────────────────────────
export function upgradePlan() {
  mockDb.account.isPro = true;
  return ok();
}

export const managePlan = ok;
export const cancelPlan = ok;

// ── Review queue ─────────────────────────────────────────────────
export function sendApplication(jobId: number) {
  mockDb.queue = mockDb.queue.filter((job) => job.id !== jobId);
  mockDb.account.sentToday += 1;
  return mockRequest({ sentToday: mockDb.account.sentToday });
}

export function discardApplication(jobId: number) {
  mockDb.queue = mockDb.queue.filter((job) => job.id !== jobId);
  return ok();
}

export function sendAllApplications() {
  const sentCount = mockDb.queue.length;
  mockDb.account.sentToday += sentCount;
  mockDb.queue = [];
  return mockRequest({ sentCount });
}

export const saveResumeTailoring = (jobId: number, keptEdits: number[]) =>
  mockRequest({ jobId, keptEdits });
export const previewResumePdf = (jobId: number) => mockRequest({ jobId });

// ── Notifications ────────────────────────────────────────────────
export function markNotificationRead(id: number) {
  mockDb.notifications = mockDb.notifications.map((item) =>
    item.id === id ? { ...item, isRead: true } : item,
  );
  return ok();
}

export function markAllNotificationsRead() {
  mockDb.notifications = mockDb.notifications.map((item) => ({
    ...item,
    isRead: true,
  }));
  return ok();
}

// ── Matches ──────────────────────────────────────────────────────
export function skipMatch(matchId: string) {
  mockDb.matches.matches = mockDb.matches.matches.map((match) =>
    match.id === matchId ? { ...match, isSkipped: true } : match,
  );
  return ok();
}

export const queueMatch = (matchId: string) => mockRequest({ matchId });

// ── Tracker & interview prep ─────────────────────────────────────
export const holdInterviewSlot = ok;

// ── Analytics ────────────────────────────────────────────────────
export function applyAutopsyFix(id: string) {
  mockDb.analytics.autopsies = mockDb.analytics.autopsies.map((item) =>
    item.id === id ? { ...item, isApplied: true } : item,
  );
  return ok();
}

// ── Documents ────────────────────────────────────────────────────
export function uploadResume(fileName: string) {
  mockDb.documents.resumeVersions = [
    ...mockDb.documents.resumeVersions,
    {
      id: crypto.randomUUID(),
      name: fileName,
      stat: "just uploaded · parsed as a new base version",
      isBest: false,
    },
  ];
  return ok();
}

export const openCoverLetter = (letterId: string) => mockRequest({ letterId });
export const generateCoverLetter = ok;

// ── Connections ──────────────────────────────────────────────────
export function connectIntegration(key: string) {
  mockDb.connections = mockDb.connections.map((item) =>
    item.key === key ? { ...item, isConnected: true } : item,
  );
  return ok();
}

// ── Gigs ─────────────────────────────────────────────────────────
export const draftGigProposal = (gigId: string) => mockRequest({ gigId });
export const passGig = (gigId: string) => mockRequest({ gigId });

// ── Career mode ──────────────────────────────────────────────────
export function setStandbyAgent(isOn: boolean) {
  mockDb.career.isStandbyOn = isOn;
  return ok();
}

export const addWatchlistCompany = ok;
export const draftCounterOffer = ok;

// ── Automation rules ─────────────────────────────────────────────
export function updateSendMode(mode: QueueMode) {
  mockDb.rules.sendMode = mode;
  return ok();
}

export function removeExcludedCompany(id: string) {
  mockDb.rules.excludedCompanies = mockDb.rules.excludedCompanies.filter(
    (company) => company.id !== id,
  );
  return ok();
}

export function toggleNotificationPreference(key: string) {
  mockDb.rules.notificationPreferences =
    mockDb.rules.notificationPreferences.map((item) =>
      item.key === key ? { ...item, isOn: !item.isOn } : item,
    );
  return ok();
}

// ── Settings & account ───────────────────────────────────────────
export function setAgentPaused(isPaused: boolean) {
  mockDb.settings.isAgentPaused = isPaused;
  return ok();
}

export const updatePaymentCard = ok;
export const requestReceipt = (entryId: string) => mockRequest({ entryId });
export const requestPasswordReset = ok;
export const requestDataExport = ok;
export const requestAccountDeletion = ok;
