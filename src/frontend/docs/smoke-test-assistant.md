# AI Assistant Smoke Test Checklist

This document provides a concise end-to-end smoke test checklist for verifying the AI Assistant functionality on deployed builds.

## Prerequisites
- Application is deployed and accessible via live URL
- Browser console is open for monitoring errors

## Test Steps

### 1. Backend Health Check
**Expected Result:** No health warning banner should appear under normal conditions.

- [ ] Load the application homepage
- [ ] Verify that no red "Service Notice" banner appears at the top
- [ ] Check browser console for any health check errors (there should be none)
- [ ] Wait 5 seconds to ensure health check completes
- [ ] Verify banner still does not appear

### 2. Assistant Section Access
**Expected Result:** Assistant section is visible and interactive.

- [ ] Scroll to or navigate to the "AI Assistant" section
- [ ] Verify the question input textarea is enabled and accepts input
- [ ] Verify the "Ask Question" button is enabled
- [ ] Verify no red "Assistant service is not ready" alert is visible

### 3. Submit Question and Receive Answer
**Expected Result:** Question submission returns an answer without errors.

- [ ] Enter a valid question in the textarea (e.g., "What is Nexus Forge AI?")
- [ ] Click "Ask Question" button
- [ ] Verify loading state appears (button shows "Processing..." with spinner)
- [ ] Wait for response
- [ ] Verify answer appears in the "Answer:" section below the form
- [ ] Check browser console - no runtime errors should appear (warnings are acceptable)

### 4. Test Suggested Questions
**Expected Result:** All suggested questions return relevant non-fallback answers.

- [ ] Click "What is Nexus Forge AI?" - verify it returns a clear product definition
- [ ] Click "What does Nexus Forge AI do?" - verify it returns capabilities overview
- [ ] Click "How does Nexus Forge AI work?" - verify it returns technical overview
- [ ] Click "What are the core capabilities?" - verify it returns features list
- [ ] Click "Tell me about zero trust privacy" - verify it returns security/privacy info
- [ ] Click "How do I get started?" - verify it returns onboarding guidance

### 5. Error Handling Validation
**Expected Result:** User-facing errors are sanitized and clear.

- [ ] If an error occurs, verify the error message is in plain English
- [ ] Verify NO raw technical details are shown (no request IDs, headers, CBOR data, reject codes)
- [ ] Verify the "Retry" button appears and is functional
- [ ] Click "Retry" and verify it re-submits the last question

### 6. Input Validation
**Expected Result:** Client-side validation works correctly.

- [ ] Try submitting an empty question - verify button is disabled
- [ ] Try submitting whitespace-only - verify button is disabled
- [ ] Enter a very long question (>1000 chars) - verify error message appears about length limit

### 7. Auto-Recovery Test
**Expected Result:** System recovers automatically from transient issues.

- [ ] If a temporary error occurs, wait 30 seconds
- [ ] Verify the health check automatically retries
- [ ] Verify the assistant becomes available again without page refresh
- [ ] Verify you can submit questions successfully after recovery

## Success Criteria

All checkboxes above should pass. Specifically:
- ✅ No unhealthy state banner under normal operation
- ✅ Question submission returns an answer
- ✅ All suggested questions return relevant non-fallback answers
- ✅ No console errors during the flow (warnings are acceptable for debugging)
- ✅ Error messages are user-friendly (no raw replica rejection payloads)
- ✅ Retry functionality works as expected
- ✅ System auto-recovers from transient issues without page refresh

## Known Issues to Verify Are Fixed

The following issues should NOT be reproducible:
- ❌ "Assistant service is not ready" banner appearing on normal page load
- ❌ Replica rejection error "Canister is stopped" (IC0508, reject code 5) when calling `getAnswer`
- ❌ Fallback "couldn't find an answer" message for core product questions like "What is Nexus Forge AI?"
- ❌ Assistant controls disabled during initial health check
- ❌ Health status stuck in unhealthy state after temporary network issue

If these errors appear, the backend canister may need to be restarted or there may be a network connectivity issue.
