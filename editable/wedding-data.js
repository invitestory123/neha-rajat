/**
 * wedding-data.js — Customer-facing editable data layer for diya-haveli
 * Edit this file to update couple names, dates, events, love story, venue, and photos.
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Neha",
    groom: "Rajat",
    brideFull: "Dr. Neha Goyal",
    groomFull: "Dr. Rajat Jain",
    introBride: "Neha",
    introGroom: "Rajat",
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
        "Pulkit Goyal & Komal Goyal"
      ],
      niecesTitle: "Loving Nieces",
      nieces: [
        "Samaira Goyal",
        "Poorvi Goyal"
      ]
    },
    groom: {
      title: "Groom's Family",
      parentsTitle: "Loving Parents",
      parents: "Mrs. Reena Jain & Mr. Pradeep Jain",
      father: "Mr. Pradeep Jain",
      mother: "Mrs. Reena Jain",
      blessings: "With warm blessings of elders and the entire Jain family"
    }
  },

  wedding: {
    dateLabel: "25 · 26 · 11 · 2026",
    timePlace: "Patkote, Uttarakhand · November 2026",
    dateISO: "2026-11-25T10:00:00+05:30",
    quote: "“Where two souls meet, the lotus blooms — and every path becomes a garden.”",
    footerDate: "25 & 26 November 2026 · Patkote, Uttarakhand",
    hashtag: "#NehaWedsRajat",
    celebrationsEyebrow: "The Celebrations",
    celebrationsTitle: "Handcrafted moments, sacred rituals & joyous festivities.",
    storyEyebrow: "Our Journey",
    storyTitle: "Moments that brought two worlds together.",
    countdownEyebrow: "The Countdown",
    countdownTitle: "Counting every second until our forever begins.",
  },

  events: [
    {
      name: "Welcome & Check-In",
      date: "25 November 2026",
      time: "10:00 AM Onwards",
      place: "Reception Area, Club Mahindra Resort",
      note: "",
      start: "2026-11-25T10:00:00+05:30",
      end: "2026-11-25T12:00:00+05:30",
      slug: "welcome-checkin",
    },
    {
      name: "Haldi Celebration",
      date: "25 November 2026",
      time: "1:00 PM Onwards",
      place: "Poolside",
      note: "",
      start: "2026-11-25T13:00:00+05:30",
      end: "2026-11-25T16:00:00+05:30",
      slug: "haldi-ceremony",
    },
    {
      name: "Sangeet & Ring Ceremony",
      date: "25 November 2026",
      time: "7:30 PM Onwards",
      place: "Blossom 1 & Indoors",
      note: "",
      start: "2026-11-25T19:30:00+05:30",
      end: "2026-11-26T01:00:00+05:30",
      slug: "sangeet-ring-ceremony",
    },
    {
      name: "Bhaat Ceremony (Bride Side)",
      date: "26 November 2026",
      time: "10:30 AM",
      place: "Banquet Hall",
      note: "",
      start: "2026-11-26T10:30:00+05:30",
      end: "2026-11-26T11:45:00+05:30",
      slug: "bhaat-bride",
    },
    {
      name: "Baraat & Wedding Pheras",
      date: "26 November 2026",
      time: "12:00 PM Onwards",
      place: "Blossom 2",
      note: "",
      start: "2026-11-26T12:00:00+05:30",
      end: "2026-11-26T17:30:00+05:30",
      slug: "baraat-wedding-pheras",
    },
    {
      name: "Grand Reception & Musical Night",
      date: "26 November 2026",
      time: "7:00 PM Onwards",
      place: "Blossom 2 & Indoors",
      note: "",
      start: "2026-11-26T19:00:00+05:30",
      end: "2026-11-27T01:00:00+05:30",
      slug: "reception-night",
    },
    {
      name: "Farewell Breakfast & Checkout",
      date: "27 November 2026",
      time: "9:00 AM – 10:00 AM",
      place: "Restaurant",
      note: "",
      start: "2026-11-27T09:00:00+05:30",
      end: "2026-11-27T11:00:00+05:30",
      slug: "checkout-farewell",
    },
  ],

  story: [
    {
      year: "The Beginning",
      title: "Two Healers, One Spark",
      text: "Between busy hospital rounds and shared clinical passions, two dedicated doctors crossed paths. What began as casual conversations quickly blossomed into an inseparable connection.",
      photo: {
        src: "./editable/assets/story-first-meeting.jpg",
        alt: "Neha and Rajat sharing a warm smile",
        placement: "right",
      },
    },
    {
      year: "Growing Together",
      title: "Shared Journeys & Unspoken Bond",
      text: "From late-night coffee breaks after grueling shifts to exploring serene mountain paths, every shared quiet laugh cemented the bond of two hearts beating in harmony.",
    },
    {
      year: "The Promise",
      title: "The Question Beneath the Pines",
      text: "Surrounded by mountain breezes and tranquility, a heartfelt question was asked — a lifetime promise of care, deep understanding, laughter, and unconditional companionship.",
      photo: {
        src: "./editable/assets/story-question.jpg",
        alt: "Dr. Neha and Dr. Rajat sharing a timeless celebration moment",
        placement: "below",
      },
    },
    {
      year: "Forever Begins",
      title: "Two Families, Seven Sacred Vows",
      text: "With the loving blessings of their parents and family, Neha and Rajat step forward hand-in-hand into a lifelong journey of mutual love, devotion, and shared dreams.",
      photo: {
        src: "./editable/assets/story-beginning.jpg",
        alt: "Ceremonial steps into a blessed future",
        placement: "left",
      },
    },
  ],

  venue: {
    name: "Club Mahindra Resort",
    address: "Patkote RF, Mailani Range, Jim Corbett, Nainital, Uttarakhand - 244715",
    description: "Nestled in the tranquil, lush wilderness of Patkote near Jim Corbett, Nainital — surrounded by serene forests and mountain vistas, an exquisite paradise for our wedding celebrations.",
    mapsQuery: "Club Mahindra Resort - Patkote, Uttarakhand",
  },

  images: {
    heroCourtyard: "./editable/assets/palace-courtyard.jpg",
    weddingHands: "./editable/assets/wedding-hands.jpg",
    storyFirstMeeting: "./editable/assets/story-first-meeting.jpg",
    storyQuestion: "./editable/assets/story-question.jpg",
    storyBeginning: "./editable/assets/story-beginning.jpg",
    openerVideo: "./editable/assets/openr.mp4",
    lotusVideo: "./editable/assets/lotus.mp4",
    bgMusic: "./editable/assets/bg-music.mp3",
  },
};
