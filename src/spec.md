# Specification

## Summary
**Goal:** Make the Islamic love letter templates and the Letter section’s default text/placeholder content appear in natural, respectful Bahasa Indonesia while preserving Islamic references and citations.

**Planned changes:**
- Translate all template `title` and `content` strings in `frontend/src/content/islamicLetterTemplates.ts` into Bahasa Indonesia, keeping Quran/ayah and hadith references intact and correctly cited.
- Update Indonesian defaults/placeholders in `frontend/src/components/valentine/LetterSection.tsx`, including fallback sender name (`displayFrom`), fallback preview text (`finalLetterText`), textarea placeholder, and the sign-off line.

**User-visible outcome:** Users can select any Islamic love letter template and see Indonesian letter text loaded into the editor/preview, and the letter area displays Indonesian defaults and placeholders even before selecting a template.
