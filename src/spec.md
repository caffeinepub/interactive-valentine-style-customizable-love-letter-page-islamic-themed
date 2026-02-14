# Specification

## Summary
**Goal:** Persist uploaded gallery photos and personalization details in browser storage so they survive refresh/reopen on the same device/browser, and clarify that this does not sync across devices.

**Planned changes:**
- Store gallery items in browser storage and restore them on load so uploaded photos remain visible after refresh/reopen in the same browser profile.
- Replace non-persistable `URL.createObjectURL(...)` storage for gallery items with a persistable format (e.g., Data URL) so restored photos render correctly after reload (thumbnails and lightbox).
- Persist customization fields (from/to names, headline, date, place, note, and letter text) in browser storage and restore them on load, while keeping existing share-link query param prefilling behavior intact.
- Update the existing “Reset All” behavior to also clear the persisted browser storage for both photos and personalization details.
- Add a visible English note near gallery upload/customization explaining that browser-saved photos/details are stored only on the current device/browser and won’t automatically appear on other devices.

**User-visible outcome:** After uploading photos and editing page details, a refresh or reopening the site in the same browser keeps them intact; removing photos and using Reset All persistently clears them; the UI clearly indicates the data won’t sync to other devices.
