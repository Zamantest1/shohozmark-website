---
name: Syne 800 font overflow rule
description: Syne 800 (font-serif) uppercase glyphs are ~12% wider than typical fonts — requires tight clamp values to avoid overflow on mobile and word-per-line wrapping on inner pages.
---

## The rule
Use tighter `clamp()` values than you'd expect for Syne 800 headings.

## Proven values
- **Homepage hero h1** (short text like "MARKETING MADE EASY."): `clamp(1.6rem, 8.5vw, 5rem)` with `px-3 sm:px-6`
- **Inner page hero h1** (medium text, ~6–8 words): `clamp(1.75rem, 3.5vw, 3rem)`
- **Blog/article title** (long text, 10+ words): `clamp(1.6rem, 3vw, 2.75rem)`
- **Section headings** (general, 3–5 words): `clamp(1.75rem, 6vw, 3.75rem)`

**Why:** Syne 800 uppercase glyphs are significantly wider than standard web fonts. At `6vw` on a 1280px viewport (≈77px), a 50-character tagline easily exceeds `max-w-3xl` (768px) and wraps every word onto its own line. The fix is to reduce the vw multiplier for inner pages with longer text strings.

**How to apply:** When a heading has more than 7 words, switch from the general section heading clamp to the inner page clamp. Always test at 1280px desktop width.
