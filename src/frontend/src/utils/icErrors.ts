/**
 * Utility for detecting and sanitizing Internet Computer replica rejection errors
 */

interface ICReplicaError {
  reject_code?: number;
  reject_message?: string;
  error_code?: string;
}

/**
 * Detects if an error is an IC replica rejection error
 */
export function isReplicaRejectionError(error: unknown): boolean {
  if (!error || typeof error !== 'object') return false;
  
  const err = error as any;
  
  // Check for reject_code 5 (canister stopped/rejected)
  if (err.reject_code === 5) return true;
  
  // Check for IC error codes
  if (err.error_code && typeof err.error_code === 'string' && err.error_code.startsWith('IC')) {
    return true;
  }
  
  // Check for reject_message containing canister stopped
  if (err.reject_message && typeof err.reject_message === 'string') {
    const msg = err.reject_message.toLowerCase();
    if (msg.includes('canister') && (msg.includes('stopped') || msg.includes('rejected'))) {
      return true;
    }
  }
  
  // Check nested error structures
  if (err.message && typeof err.message === 'string') {
    const msg = err.message.toLowerCase();
    if (msg.includes('replica returned a rejection') || 
        msg.includes('reject code') ||
        (msg.includes('canister') && msg.includes('stopped'))) {
      return true;
    }
  }
  
  return false;
}

/**
 * Extracts a user-friendly message from an IC replica rejection error
 */
export function sanitizeReplicaError(error: unknown): string {
  if (!isReplicaRejectionError(error)) {
    // Not a replica error, return as-is if it's an Error object
    if (error instanceof Error) {
      return error.message;
    }
    return 'An unexpected error occurred';
  }
  
  // Return a consistent, user-friendly message for replica rejections
  return 'The assistant service is temporarily unavailable. Please try again shortly.';
}

/**
 * Logs error details for debugging while returning a sanitized message
 */
export function handleICError(error: unknown, context?: string): string {
  const sanitized = sanitizeReplicaError(error);
  
  // Log as warning instead of error to reduce console noise during normal operation
  if (context) {
    console.warn(`[${context}] Error details:`, error);
  } else {
    console.warn('Error details:', error);
  }
  
  return sanitized;
}
