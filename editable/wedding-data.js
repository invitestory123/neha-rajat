/**
 * wedding-data.js — Customer-facing editable data layer for midnight-stargaze
 * Wedding Invitation: Dr. Neha Goyal & Dr. Rajat Jain
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Rajat",
    bride: "Neha",
    groomFull: "Dr. Rajat Jain",
    brideFull: "Dr. Neha Goyal",
    groomParents: "Son of Mrs. Reena Jain & Mr. Pradeep Jain",
    brideParents: "Daughter of Mrs. Poonam Goyal & Mr. Lalit Goyal",
    hashtag: "#NehaWedsRajat",
    monogram: "N & R",
    tagline: "Two kindred souls, united in love and lifelong companionship",
  },

  family: {
    bride: {
      title: "Bride's Family",
      parentsTitle: "Loving Parents",
      parents: "Mrs. Poonam Goyal & Mr. Lalit Goyal",
      father: "Mr. Lalit Goyal",
      mother: "Mrs. Poonam Goyal",
      siblingsTitle: "Brothers & Sisters-in-Law",
      siblings: [
        "Ankit Goyal & Charu Goyal",
        "Pulkit Goyal & Komal Goyal",
      ],
      niecesTitle: "Loving Nieces",
      nieces: [
        "Samaira Goyal",
        "Poorvi Goyal",
      ],
    },
    groom: {
      title: "Groom's Family",
      parentsTitle: "Loving Parents",
      parents: "Mrs. Reena Jain & Mr. Pradeep Jain",
      father: "Mr. Pradeep Jain",
      mother: "Mrs. Reena Jain",
      blessings: "With warm blessings of elders and the entire Jain family",
    },
  },

  wedding: {
    dateISO: "2026-11-25T10:00:00+05:30",
    dateLabel: "25 & 26 November 2026",
    timeLabel: "Patkote, Uttarakhand",
    timePlace: "Patkote, Uttarakhand · November 2026",
    quote: "“Where two souls meet, the lotus blooms — and every path becomes a garden.”",
    footerDate: "25 & 26 November 2026 · Patkote, Uttarakhand",
    hashtag: "#NehaWedsRajat",
  },

  venue: {
    name: "Club Mahindra Resort",
    address: "Patkote RF, Mailani Range, Jim Corbett, Nainital, Uttarakhand - 244715",
    description: "Nestled in the tranquil, lush wilderness of Patkote near Jim Corbett, Nainital — surrounded by serene forests and mountain vistas, an exquisite paradise for our wedding celebrations.",
    mapsQuery: "Club Mahindra Resort - Patkote, Uttarakhand",
  },

  verse: {
    hindi: "॥ श्री गणेशाय नमः ॥",
    text: "“Where two souls meet, the lotus blooms — and every path becomes a garden.”",
  },

  events: [
    {
      name: "Baraat & Wedding Pheras",
      icon: "heart",
      date: "Thursday, 26th November 2026",
      dayLabel: "Thursday",
      dayNum: "26",
      monthLabel: "November 2026",
      time: "Baraat 12:00 PM · Pheras 4:00 PM",
      venue: "Blossom 2, Club Mahindra Resort, Patkote",
      note: "Baraat arrival at 12:00 PM, sacred vows & Saat Pheras at 4:00 PM under the mountain sky.",
      start: "2026-11-26T12:00:00+05:30",
      end: "2026-11-26T18:00:00+05:30",
    },
    {
      name: "Welcome & Check-In",
      date: "25 November 2026",
      time: "10:00 AM Onwards",
      venue: "Reception Area, Club Mahindra Resort",
      note: "Warm welcome, check-in & settling into the serene hills of Patkote.",
      start: "2026-11-25T10:00:00+05:30",
      end: "2026-11-25T12:00:00+05:30",
    },
    {
      name: "Haldi Celebration",
      date: "25 November 2026",
      time: "1:00 PM Onwards",
      venue: "Poolside",
      note: "Shades of Yellow & Sunshine, fragrant turmeric & joyful laughter.",
      start: "2026-11-25T13:00:00+05:30",
      end: "2026-11-25T16:00:00+05:30",
    },
    {
      name: "Sangeet & Ring Ceremony",
      date: "25 November 2026",
      time: "7:30 PM Onwards",
      venue: "Blossom 1 & Indoors",
      note: "An evening of music, dance performances & exchange of rings.",
      start: "2026-11-25T19:30:00+05:30",
      end: "2026-11-26T01:00:00+05:30",
    },
    {
      name: "Bhaat Ceremony (Bride Side)",
      date: "26 November 2026",
      time: "10:30 AM",
      venue: "Banquet Hall",
      note: "Traditional mama-bhaat rituals and auspicious blessings.",
      start: "2026-11-26T10:30:00+05:30",
      end: "2026-11-26T11:45:00+05:30",
    },
    {
      name: "Baraat",
      date: "26 November 2026",
      time: "12:00 PM Onwards",
      venue: "Blossom 2, Club Mahindra Resort, Patkote",
      note: "Grand Baraat procession and warm welcome of the groom & family.",
      start: "2026-11-26T12:00:00+05:30",
      end: "2026-11-26T15:30:00+05:30",
    },
    {
      name: "Wedding Pheras",
      date: "26 November 2026",
      time: "4:00 PM Onwards",
      venue: "Blossom 2, Club Mahindra Resort, Patkote",
      note: "Sacred Vedic vows & Saat Pheras under the mountain sky.",
      start: "2026-11-26T16:00:00+05:30",
      end: "2026-11-26T18:00:00+05:30",
    },
    {
      name: "Grand Reception & Musical Night",
      date: "26 November 2026",
      time: "7:00 PM Onwards",
      venue: "Blossom 2 & Indoors",
      note: "Royal dinner, celebrations, live musical night & blessings.",
      start: "2026-11-26T19:00:00+05:30",
      end: "2026-11-27T01:00:00+05:30",
    },
    {
      name: "Farewell Breakfast & Checkout",
      date: "27 November 2026",
      time: "9:00 AM – 10:00 AM",
      venue: "Restaurant",
      note: "Fond farewells, hearty breakfast & memories to cherish forever.",
      start: "2026-11-27T09:00:00+05:30",
      end: "2026-11-27T11:00:00+05:30",
    },
  ],

  program: [
    { name: "Welcome & Check-In", time: "25 Nov · 10:00 AM" },
    { name: "Haldi Celebration", time: "25 Nov · 1:00 PM" },
    { name: "Sangeet & Ring Ceremony", time: "25 Nov · 7:30 PM" },
    { name: "Bhaat Ceremony (Bride Side)", time: "26 Nov · 10:30 AM" },
    { name: "Baraat", time: "26 Nov · 12:00 PM" },
    { name: "Wedding Pheras", time: "26 Nov · 4:00 PM" },
    { name: "Grand Reception & Musical Night", time: "26 Nov · 7:00 PM" },
    { name: "Farewell Breakfast & Checkout", time: "27 Nov · 9:00 AM" },
  ],

  story: [
    {
      year: "The Beginning",
      title: "Two Healers, One Spark",
      text: "Between busy hospital rounds and shared clinical passions, two dedicated doctors crossed paths. What began as casual conversations quickly blossomed into an inseparable connection.",
    },
    {
      year: "Growing Together",
      title: "Shared Journeys & Unspoken Bond",
      text: "From late-night coffee breaks after grueling shifts to exploring serene mountain paths, every shared quiet laugh cemented the bond of two hearts beating in harmony.",
    },
    {
      year: "The Proposal",
      title: "The Question Beneath the Pines",
      text: "Surrounded by mountain breezes and tranquility, a heartfelt question was asked — a lifetime promise of care, deep understanding, laughter, and unconditional companionship.",
    },
    {
      year: "Forever Begins",
      title: "Two Families, Seven Sacred Vows",
      text: "With the loving blessings of their parents and family, Neha and Rajat step forward hand-in-hand into a lifelong journey of mutual love, devotion, and shared dreams.",
    },
  ],

  footer: {
    families: "With love, the Goyal & Jain families",
    blessing: "With warm blessings of elders and the entire Goyal & Jain families",
    datePlace: "25 & 26 November 2026 · Patkote, Uttarakhand",
  },

  sections: {
    events: true,
    venue: true,
    countdown: true,
  },

  images: {
    couple: "./editable/assets/couple.webp",
    venue: "./editable/assets/venue-palace.webp",
    ganesha: "./editable/assets/ganesha.png",
    monogram: "./editable/assets/monogram.png",
  },

  music: {
    src: "./editable/assets/bg-music.mp3",
    title: "Kaise Main Kahun Tujhse (Flute Version)",
  },
};
