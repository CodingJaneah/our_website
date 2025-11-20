/**
 * Safe wrapper utilities for sending events to Meta Pixel (fbq).
 *
 * IMPORTANT: Do not send raw PII (email, full names, messages). This helper
 * deliberately only sends non-identifying metadata about the submission so
 * tracking can be performed without exposing user personal data.
 */
import type { } from "react";

/**
 * Track a generic Meta Pixel custom event if fbq is available.
 * @param eventName - Name of the custom event
 * @param params - Non-PII parameters to send with the event
 */
export function trackMetaPixelEvent(eventName: string, params?: Record<string, any>) {
  try {
    const fbq = (window as any).fbq;
    if (typeof fbq === "function") {
      // Use trackCustom for custom events
      fbq("trackCustom", eventName, params || {});
      return true;
    }

    // If fbq isn't available, silently noop (avoid throwing in production)
    return false;
  } catch (err) {
    // Silently handle any errors to avoid breaking the app
    // eslint-disable-next-line no-console
    console.warn("Meta Pixel track failed:", err);
    return false;
  }
}

/**
 * Track a safe, non-PII event for contact form submission.
 * We deliberately avoid sending name/email/message content.
 */
export function trackContactSubmission(payload: { name?: string; email?: string; message?: string; subject?: string }) {
  // Send only metadata (presence flags and message length)
  const params = {
    has_name: !!payload.name,
    has_email: !!payload.email,
    subject_present: !!payload.subject,
    message_length: payload.message ? payload.message.length : 0,
    submitted_at: new Date().toISOString(),
  };

  return trackMetaPixelEvent("ContactFormSubmit", params);
}
