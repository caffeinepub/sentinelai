# Specification

## Summary
**Goal:** Remove all “SentinelAI” branding from the UI/assets and make the Motoko Assistant service report healthy and answer questions reliably under the “Nexus Forge AI” brand.

**Planned changes:**
- Replace all user-facing occurrences of “SentinelAI” with “Nexus Forge AI” across the frontend (including visible text, headings, helper copy, CTA text, `alt` text, and `aria-label`s), specifically updating the remaining known components: `SiteHeader`, `SiteFooter`, `HeroSection`, `AssistantSection`, `FAQSection`, `UseCasesSection`, and `ContactSection`.
- Update branding-related static asset references so no rendered `<img>` or CSS background URLs reference filenames containing `sentinelai`, and ensure all referenced assets load without 404s (including header/footer logos and hero background).
- Update Contact section copy so no visible email address text or mailto subject/body text contains “SentinelAI”, while keeping the existing `mailto:` destination behavior unchanged unless a new email is provided.
- Fix the Motoko Assistant backend so `healthy()` reports ready when the knowledge base is usable, ensure a non-empty curated knowledge base exists on-canister (seeded/persisted), and make `getAnswer(question)` never trap—returning a deterministic, user-friendly English fallback branded as “Nexus Forge AI” for unknown inputs.

**User-visible outcome:** The site shows zero instances of “SentinelAI”, uses “Nexus Forge AI” branding and non-SentinelAI asset filenames throughout, and the Assistant section works end-to-end with the backend reporting healthy and returning answers (or a safe branded fallback) without errors.
