# Specification

## Summary
**Goal:** Make the Nexus Forge AI Assistant work end-to-end in production by fixing incorrect “not ready” health reporting, removing the erroneous red “Service Notice” banner under normal conditions, and ensuring Q&A requests succeed reliably.

**Planned changes:**
- Fix backend readiness/health reporting so `healthy()` returns `true` in normal deployed operation and does not intermittently report unhealthy when the assistant is usable.
- Ensure the Motoko assistant knowledge base is always initialized and non-empty at runtime (including after upgrades), and make `healthy()` a reliable signal that fails safely (no traps).
- Make the assistant Q&A flow work end-to-end: `AssistantSection.tsx` calls Motoko `getAnswer(question)` successfully, returns deterministic answers for known prompts, and provides a branded English fallback for unknown questions without trapping.
- Improve frontend health/error handling so transient backend issues don’t leave the UI stuck in “not ready”; recheck health automatically, gate UI only on definitive unhealthy results, and keep user-facing messaging consistent and sanitized.
- Run the documented assistant smoke test checklist and fix any failures so the deployed build passes health + Q&A checks without console/runtime errors.

**User-visible outcome:** On loading the deployed site, users do not see the red “Service Notice” banner under normal conditions, the Assistant input is enabled, and submitting a question (e.g., “What is Nexus Forge AI?”) reliably returns an English answer without exposing replica/debug errors.
