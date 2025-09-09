/**
 * Client-side rate limiter to prevent API abuse
 */
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor(maxRequests: number = 10, windowMs: number = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  /**
   * Check if a request is allowed for the given identifier
   * @param identifier - Unique identifier (e.g., session ID, user ID)
   * @returns true if request is allowed, false if rate limited
   */
  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const userRequests = this.requests.get(identifier) || [];

    // Remove old requests outside the time window
    const validRequests = userRequests.filter(timestamp => now - timestamp < this.windowMs);

    // Check if under the limit
    if (validRequests.length < this.maxRequests) {
      validRequests.push(now);
      this.requests.set(identifier, validRequests);
      return true;
    }

    // Rate limited
    return false;
  }

  /**
   * Get remaining requests for identifier
   */
  getRemainingRequests(identifier: string): number {
    const now = Date.now();
    const userRequests = this.requests.get(identifier) || [];
    const validRequests = userRequests.filter(timestamp => now - timestamp < this.windowMs);
    return Math.max(0, this.maxRequests - validRequests.length);
  }

  /**
   * Get time until reset (in milliseconds)
   */
  getTimeUntilReset(identifier: string): number {
    const userRequests = this.requests.get(identifier) || [];
    if (userRequests.length === 0) return 0;
    
    const oldestRequest = Math.min(...userRequests);
    return Math.max(0, this.windowMs - (Date.now() - oldestRequest));
  }

  /**
   * Clear all rate limiting data (useful for testing)
   */
  clear(): void {
    this.requests.clear();
  }
}

// Create a singleton instance for AI API calls
export const aiRateLimiter = new RateLimiter(
  15, // 15 requests max
  60000 // per 60 seconds
);

// Create a singleton instance for general API calls
export const generalRateLimiter = new RateLimiter(
  30, // 30 requests max
  60000 // per 60 seconds
);

export default RateLimiter;