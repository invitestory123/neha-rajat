# Customer Editing Guide — Neha & Rajat Wedding Invitation (midnight-stargaze)

This template is a luxury destination wedding invitation for Dr. Neha Goyal & Dr. Rajat Jain featuring dynamic star fields, Lord Ganesha blessing, couple portrait, live countdown timer, celebration event itinerary, and venue details for Club Mahindra Resort, Patkote, Uttarakhand.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///c:/invitestory/week7/neha-weds-rajat/editable/wedding-data.js)

### Couple Profiles & Family
Edit `couple` and `family` in `editable/wedding-data.js`:
- `groom` & `bride`: First names (`"Rajat"`, `"Neha"`)
- `groomFull` & `brideFull`: Full ceremonial names (`"Dr. Rajat Jain"`, `"Dr. Neha Goyal"`)
- `groomParents` & `brideParents`: Family / parentage lines
- `hashtag`: Wedding hashtag (`"#NehaWedsRajat"`)
- `monogram`: Monogram initials (`"N & R"`)
- `tagline`: Subtitle tagline

### Wedding Date & Schedule
Edit `wedding`, `events`, and `program` in `editable/wedding-data.js`:
- `dateISO`: ISO 8601 date string driving the live countdown and calendar exports (`"2026-11-25T10:00:00+05:30"`)
- `dateLabel`: Display date string (`"25 & 26 November 2026"`)
- `timeLabel`: Location / timing subtitle (`"Patkote, Uttarakhand"`)
- `events[]`: Wedding celebration events (Welcome, Haldi, Sangeet, Bhaat, Baraat & Pheras, Reception, Checkout)
- `program[]`: Day-of itinerary / timeline

### Verse & Venue
Edit `verse` and `venue` in `editable/wedding-data.js`:
- `verse.hindi`: Deity invocation (`"॥ श्री गणेशाय नमः ॥"`)
- `verse.text`: Featured wedding quote (`"“Where two souls meet, the lotus blooms — and every path becomes a garden.”"`)
- `venue.name`: `"Club Mahindra Resort"`
- `venue.address`: `"Patkote RF, Mailani Range, Jim Corbett, Nainital, Uttarakhand - 244715"`
- `venue.mapsQuery`: Location query for Google Maps embed and directions

### Images
Replace files directly in `editable/assets/` or update paths in `editable/wedding-data.js`:
- Couple portrait: `editable/assets/couple.webp`
- Palace venue photo: `editable/assets/venue-palace.webp`
- Ganesha icon: `editable/assets/ganesha.png`

---

## Special Sections & Features

- **Star Field & Aurora Animations**: Glowing starry background and celestial light effects.
- **Countdown**: Real-time counter to the wedding celebration.
- **Calendar Export**: Automatically generates Google Calendar link and downloadable `.ics` file.
- **Interactive Gate**: Tap-to-open gate animation with Lord Ganesha's blessings.

---

## Rules for Future Agents

1. Make customer content edits in `editable/wedding-data.js` and swap files in `editable/assets/`.
2. Keep ISO date strings with proper timezone offsets (e.g. `+05:30`).
3. Verify syntax with `node --check editable/wedding-data.js` after making edits.
