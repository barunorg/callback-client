// Landing-page content API — currently mocked. These run in Server
// Components at build time (static export), so they could later read from a
// CMS or backend without shipping any fetching code to the browser.

import { heroJobMatches, heroMetrics } from "./mock/data/landing/hero";
import {
  applicationSteps,
  callbackPrinciples,
  careerFeatures,
  comparisonCards,
  comparisonRows,
  ghostShieldChecks,
  pricingPlans,
  problemCards,
  testimonials,
  trustReportRows,
} from "./mock/data/landing/landingPage";
import { mockRequest } from "./mock/mockRequest";

// No artificial latency at build time.
const BUILD_LATENCY_MS = 0;

export const getHeroContent = () =>
  mockRequest(
    { jobMatches: heroJobMatches, metrics: heroMetrics },
    BUILD_LATENCY_MS,
  );

export const getProblemCards = () =>
  mockRequest(problemCards, BUILD_LATENCY_MS);

export const getApplicationSteps = () =>
  mockRequest(applicationSteps, BUILD_LATENCY_MS);

export const getDifferentiation = () =>
  mockRequest(
    {
      cards: comparisonCards,
      rows: comparisonRows,
      principles: callbackPrinciples,
    },
    BUILD_LATENCY_MS,
  );

export const getGhostShield = () =>
  mockRequest(
    { checks: ghostShieldChecks, trustReport: trustReportRows },
    BUILD_LATENCY_MS,
  );

export const getTestimonials = () =>
  mockRequest(testimonials, BUILD_LATENCY_MS);

export const getCareerFeatures = () =>
  mockRequest(careerFeatures, BUILD_LATENCY_MS);

export const getPricingPlans = () =>
  mockRequest(pricingPlans, BUILD_LATENCY_MS);
