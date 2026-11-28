// Onboarding API — currently mocked. Replace each body with the real
// resume-parsing and profile endpoints when the backend is ready.

import type { OnboardingAnswers } from "@/types/onboarding";
import { parsedResumeFixture } from "./mock/data/onboarding/parsedResume";
import { mockRequest } from "./mock/mockRequest";

// Long enough for the five "parsing…" rows to tick through.
const PARSE_LATENCY_MS = 2600;

export const parseResume = (fileName: string) =>
  mockRequest({ fileName, ...parsedResumeFixture }, PARSE_LATENCY_MS);

export const completeOnboarding = (answers: OnboardingAnswers) =>
  mockRequest({ answers });
