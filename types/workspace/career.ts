import type { TimelineEntry } from "./common";

export type RadarBar = { label: string; bar: string; met: string };

export type CareerData = {
  visaTimeline: TimelineEntry[];
  radarBars: RadarBar[];
  radarSummary: { quietMatches: number; clearedEveryBar: number };
  isStandbyOn: boolean;
  watchlist: string[];
  standbyDigest: { matchedRoles: number; medianComp: string; delta: string };
  negotiation: {
    figures: { label: string; value: string; detail: string }[];
    suggestedCounter: string;
    acceptanceOdds: string;
  };
};
