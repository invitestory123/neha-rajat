# Customer Editing Guide — Neha & Rajat Wedding Invitation

This template is a luxury destination wedding invitation for Neha & Rajat featuring an interactive lamp-lighting (press-and-hold diya) ritual, animated word-by-word quotes, loving family blessings section, love story timeline with photos, background flute music player, celebration itinerary with .ics calendar downloads, live countdown timer, and embedded Google Maps venue card for Club Mahindra Resort - Patkote, Uttarakhand.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///c:/invitestory/week7/neha-rajat/editable/wedding-data.js)

### Couple Details
Edit `couple` in `editable/wedding-data.js`:
- `bride`: Neha (Hero section)
- `groom`: Rajat (Hero section)
- `brideFull`: Dr. Neha Goyal (Family blessings / formal cards)
- `groomFull`: Dr. Rajat Jain (Family blessings / formal cards)
- `monogram`: Couple initials or monogram (e.g. `"N & R"`)
- `tagline`: Tagline subtitle

### Family & Blessings
Edit `family` in `editable/wedding-data.js`:
- `bride`:
  - `parents`: Mrs. Poonam Goyal & Mr. Lalit Goyal
  - `father`: Mr. Lalit Goyal
  - `mother`: Mrs. Poonam Goyal
  - `siblings`: Ankit Goyal & Charu Goyal, Pulkit Goyal & Komal Goyal
  - `nieces`: Samaira Goyal, Poorvi Goyal
- `groom`:
  - `parents`: Mrs. Reena Jain & Mr. Pradeep Jain
  - `father`: Mr. Pradeep Jain
  - `mother`: Mrs. Reena Jain

### Wedding Date & Hero
Edit `wedding` in `editable/wedding-data.js`:
- `dateLabel`: Formatted short date string (`"25 · 26 · 11 · 2026"`)
- `timePlace`: Subheading label (`"Patkote, Uttarakhand · November 2026"`)
- `dateISO`: Event timestamp in ISO 8601 (`"2026-11-25T10:00:00+05:30"`). Directly drives the live countdown timer.

### Events & Ceremonies (7 Events)
Edit `events` array in `editable/wedding-data.js`:
1. Welcome & Check-In (25 Nov, 10:00 AM Onwards · Reception Area, Club Mahindra Resort)
2. Haldi Celebration (25 Nov, 1:00 PM Onwards · Poolside)
3. Sangeet & Ring Ceremony (25 Nov, 7:30 PM Onwards · Blossom 1 & Indoors)
4. Bhaat Ceremony - Bride Side (26 Nov, 10:30 AM · Banquet Hall)
5. Baraat & Wedding Pheras (26 Nov, 12:00 PM Onwards · Blossom 2)
6. Grand Reception & Musical Night (26 Nov, 7:00 PM Onwards · Blossom 2 & Indoors)
7. Farewell Breakfast & Checkout (27 Nov, 9:00 AM – 10:00 AM · Restaurant)

### Venue & Map
Edit `venue` in `editable/wedding-data.js`:
- `name`: `"Club Mahindra Resort"`
- `address`: `"Patkote RF, Mailani Range, Jim Corbett, Nainital, Uttarakhand - 244715"`
- `mapsQuery`: `"Club Mahindra Resort - Patkote, Uttarakhand"`

---

## Rules for Future Agents

1. Make customer content edits in `editable/wedding-data.js` and swap assets in `editable/assets/`.
2. Keep ISO date strings with proper timezone offsets (e.g. `+05:30`).
3. Validate changes with `node --check editable/wedding-data.js`.
