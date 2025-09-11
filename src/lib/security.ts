import DOMPurify from 'dompurify';

/**
 * Security utility functions for input sanitization and validation
 */

/**
 * Sanitize HTML content to prevent XSS attacks
 * @param dirty - Potentially unsafe HTML string
 * @returns Sanitized HTML string safe for rendering
 */
export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href', 'target'],
    ALLOW_DATA_ATTR: false,
  });
}

/**
 * Sanitize user input for chat messages
 * @param input - User input string
 * @returns Sanitized string safe for processing
 */
export function sanitizeUserInput(input: string): string {
  // Remove any HTML tags completely for user input
  return DOMPurify.sanitize(input, { 
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  }).trim();
}

/**
 * Validate API key format
 * @param apiKey - API key to validate
 * @returns true if valid format, false otherwise
 */
export function validateApiKey(apiKey: string | undefined): boolean {
  if (!apiKey) return false;
  
  // OpenRouter API keys start with 'sk-or-v1-' and are followed by 64 hex characters
  const apiKeyRegex = /^sk-or-v1-[a-f0-9]{64}$/;
  return apiKeyRegex.test(apiKey);
}

/**
 * Validate URL format for security
 * @param url - URL to validate
 * @returns true if valid and safe URL, false otherwise
 */
export function validateUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    // Only allow https and http protocols
    return ['https:', 'http:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
}

/**
 * Generate a secure session identifier
 * @returns Cryptographically secure random string
 */
export function generateSecureSessionId(): string {
  // Use crypto.getRandomValues for cryptographically secure random values
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Escape special characters in user input to prevent injection
 * @param input - Input string to escape
 * @returns Escaped string
 */
export function escapeSpecialChars(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Check if content contains potentially suspicious patterns
 * @param content - Content to check
 * @returns true if content appears safe, false if suspicious
 */
export function isSafeContent(content: string): boolean {
  // Check for common XSS patterns
  const suspiciousPatterns = [
    /<script\b[^<]*(?:(?!<\/script[\s\S]*?>)[^<]*)*<\/script[\s\S]*?>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /data:text\/html/gi,
    /vbscript:/gi,
  ];

  return !suspiciousPatterns.some(pattern => pattern.test(content));
}

/**
 * Truncate text to prevent extremely long inputs
 * @param text - Text to truncate
 * @param maxLength - Maximum allowed length (default: 2000)
 * @returns Truncated text
 */
export function truncateText(text: string, maxLength: number = 2000): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}