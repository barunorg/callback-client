const MOCK_LATENCY_MS = 250;

/**
 * Simulates a network round trip. Returns a deep copy (structuredClone) so
 * callers can never mutate the mock database by reference.
 */
export function mockRequest<T>(data: T, latencyMs = MOCK_LATENCY_MS) {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(structuredClone(data)), latencyMs);
  });
}
