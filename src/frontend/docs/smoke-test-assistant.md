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

### 2. Assistant Section Access
**Expected Result:** Assistant section is visible and interactive.

- [ ] Scroll to or navigate to the "AI Assistant" section
- [ ] Verify the question input textarea is enabled and accepts input
- [ ] Verify the "Send Question" button is enabled

### 3. Submit Question and Receive Answer
**Expected Result:** Question submission returns an answer without errors.

- [ ] Enter a valid question in the textarea (e.g., "What is Jojo Labs?")
- [ ] Click "Send Question" button
- [ ] Verify loading state appears (button shows "Processing..." with spinner)
- [ ] Wait for response
- [ ] Verify answer appears in the "Answer:" section below the form
- [ ] Check browser console - no runtime errors should appear

### 4. Error Handling Validation
**Expected Result:** User-facing errors are sanitized and clear.

- [ ] If an error occurs, verify the error message is in plain English
- [ ] Verify NO raw technical details are shown (no request IDs, headers, CBOR data, reject codes)
- [ ] Verify the "Retry" button appears and is functional
- [ ] Click "Retry" and verify it re-submits the last question

### 5. Input Validation
**Expected Result:** Client-side validation works correctly.

- [ ] Try submitting an empty question - verify it's prevented
- [ ] Try submitting whitespace-only - verify it's prevented
- [ ] Enter a very long question (>1000 chars) - verify character counter and validation

## Success Criteria

All checkboxes above should pass. Specifically:
- ✅ No unhealthy state banner under normal operation
- ✅ Question submission returns an answer
- ✅ No console errors during the flow
- ✅ Error messages are user-friendly (no raw replica rejection payloads)
- ✅ Retry functionality works as expected

## Known Issues to Verify Are Fixed

The following issue should NOT be reproducible:
- ❌ Replica rejection error "Canister is stopped" (IC0508, reject code 5) when calling `getAnswer`

If this error appears, the backend canister may need to be restarted or the deployment may have failed.
