# Specification

## Summary
**Goal:** Make the Try Demo section background and accents feel neutral and government-styled (muted graphite/off-white), removing the overly green/AI-looking treatment without changing any copy or the demo link.

**Planned changes:**
- Update `frontend/src/components/TryDemoSection.tsx` section wrapper styling to use a neutral background consistent with the site’s muted graphite/off-white palette (no noticeable green tint).
- Reduce or replace green-accent-heavy styling within the Try Demo section with neutral/muted styling while keeping the layout and content the same.
- Preserve all Try Demo text and keep the demo launch URL and behavior unchanged (`https://nexusforgeai.base44.app/Chat`, opens in a new tab with `noopener noreferrer`).

**User-visible outcome:** The Try Demo section looks clean and neutral (not overly green or “AI-styled”), while the same demo button/link and all existing text remain unchanged.
