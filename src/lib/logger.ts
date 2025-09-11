interface LogEntry {
  timestamp: string;
  userMessage: string;
  aiResponse: string;
  sessionId: string;
  userAgent?: string;
  apiModel?: string;
}

class Logger {
  private sessionId: string;
  private loggingEndpoint: string | null;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.loggingEndpoint = import.meta.env.VITE_LOGGING_ENDPOINT || null;
  }

  private generateSessionId(): string {
    // Securely generate a random string for session IDs
    const randomStr = Logger.secureRandomString(12);
    return `session_${Date.now()}_${randomStr}`;
  }

  private static secureRandomString(length: number): string {
    // generate `length` secure random bytes, and encode them as base36 for compactness
    const bytes = new Uint8Array(length);
    window.crypto.getRandomValues(bytes);
    // Convert each byte to a base36 character, join into string, and slice to desired length
    return Array.from(bytes, b => b.toString(36)).join('').substr(0, length);
  }

  async logConversation(userMessage: string, aiResponse: string, apiModel?: string) {
    const logEntry: LogEntry = {
      timestamp: new Date().toISOString(),
      userMessage,
      aiResponse,
      sessionId: this.sessionId,
      userAgent: navigator.userAgent,
      apiModel
    };

    // Log to console for development
    console.log('Conversation Log:', logEntry);

    // Send to external logging endpoint if configured
    if (this.loggingEndpoint) {
      try {
        await fetch(this.loggingEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(logEntry)
        });
      } catch (error) {
        console.error('Failed to send log to external endpoint:', error);
      }
    }

    // Store locally for backup/debugging
    this.storeLocalLog(logEntry);
  }

  private storeLocalLog(logEntry: LogEntry) {
    try {
      const existingLogs = JSON.parse(localStorage.getItem('conversation_logs') || '[]');
      existingLogs.push(logEntry);
      
      // Keep only last 100 entries to prevent localStorage bloat
      if (existingLogs.length > 100) {
        existingLogs.splice(0, existingLogs.length - 100);
      }
      
      localStorage.setItem('conversation_logs', JSON.stringify(existingLogs));
    } catch (error) {
      console.error('Failed to store log locally:', error);
    }
  }

  // Method to retrieve logs for debugging
  getLogs(): LogEntry[] {
    try {
      return JSON.parse(localStorage.getItem('conversation_logs') || '[]');
    } catch (error) {
      console.error('Failed to retrieve logs:', error);
      return [];
    }
  }

  // Method to clear logs
  clearLogs() {
    localStorage.removeItem('conversation_logs');
  }

  // Method to export logs as JSON
  exportLogs(): string {
    return JSON.stringify(this.getLogs(), null, 2);
  }
}

export const logger = new Logger();
export type { LogEntry };