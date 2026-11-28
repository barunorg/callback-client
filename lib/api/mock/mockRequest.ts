// Fake network latency, so loading skeletons and pending buttons behave like
// they will with the real API. Set both to 0 to turn the delay off.
const MIN_LATENCY_MS = 700;
const MAX_LATENCY_MS = 1500;

function randomLatency() {
  return MIN_LATENCY_MS + Math.random() * (MAX_LATENCY_MS - MIN_LATENCY_MS);
}

/**
 * Simulates a network round trip with a random delay. Returns a deep copy
 * (structuredClone) so callers can never mutate the mock database by
 * reference.
 *
 * @param data - the value the fake endpoint responds with
 * @param latencyMs - fixed delay; defaults to a random 0.7–1.5 s
 */
export function mockRequest<T>(data: T, latencyMs = randomLatency()) {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(structuredClone(data)), latencyMs);
  });
}
