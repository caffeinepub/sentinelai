# Specification

## Summary
**Goal:** Restore successful end-to-end build and deployment, fix any runtime issues found in a full single-page smoke test, and add a minimal backend health check with a clear frontend failure state.

**Planned changes:**
- Identify and fix the root cause(s) of build/deploy failure so frontend bundling and Motoko compilation succeed and deployment completes without errors.
- Smoke-test the SPA and fix runtime issues so all sections render, header navigation scroll targets work, external demo links open correctly in a new tab, and the contact form triggers a mailto flow without console errors.
- Add a minimal, non-breaking backend query health method and wire a lightweight frontend check that shows a user-friendly message when the backend is unreachable (without modifying immutable hook/UI files).
- Audit and fix any broken/missing static asset references (especially under `/assets/generated`) so images load without 404s in deployed light/dark contexts.

**User-visible outcome:** The site deploys successfully, all sections and navigation work without console errors, demo links open the correct external URL, the contact form works via mailto, images load properly, and users see a clear message if the backend is unreachable.
