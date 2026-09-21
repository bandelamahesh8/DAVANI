/**
 * BIRTHDAY CONFIGURATION FILE
 * SISTER: Davani Appala
 * BROTHER: Mahesh
 * 
 * All text, roasts, statistics, timeline milestones, complaints, letter content,
 * and photo paths are managed here.
 */

export const birthdayConfig = {
  sisterName: "Davani Appala",
  sisterNickname: "Davani",
  brotherName: "Mahesh",
  birthdayDate: "2026-09-22", // Easily adjustable

  // Section 5: Opening Sequence Messages
  openingMessages: [
    { text: "Hey.", delay: 1000 },
    { text: "Yes, you.", delay: 1200 },
    { text: "Don't skip.", delay: 1200 },
    { text: "I actually made something for you.", delay: 1500 },
    { text: "Before you get emotional...", delay: 1600 },
    { text: "...remember I am still your brother.", delay: 1800 },
    { text: "Ready?", delay: 1000 }
  ],
  openingButtonText: "Unfortunately, yes.",

  // Section 6: Fake System Check
  diagnostics: {
    title: "Sister Diagnostic Utility v4.2",
    subtitle: "Apple Silicon Architecture • Sibling Protocol v9.0",
    checks: [
      { id: "identity", label: "Identity Verification", result: "Davani Appala Detected", status: "pass" },
      { id: "birthday", label: "Birthday Confirmation", result: "Validated (Another Year Wiser... Theoretically)", status: "pass" },
      { id: "drama", label: "Real-time Drama Analysis", result: "97.4% (Elevated)", status: "warning" },
      { id: "tolerance", label: "Brother Tolerance Buffer", result: "Critical (18% Remaining)", status: "warning" },
      { id: "attitude", label: "Attitude Sensors", result: "Off the charts", status: "fail" }
    ],
    warningTitle: "CRITICAL SYSTEM ADVISORY",
    warningMessage: "Attitude levels are significantly above recommended operating limits. Brother system instability may occur.",
    buttonText: "Ignore warning and continue",
    buttonSnark: "Obviously. We have been doing that for years."
  },

  // Section 7: Cinematic Intro
  intro: {
    heroImage: "/photos/hero/childhood_portrait.jpg",
    lines: [
      "Once upon a time...",
      "There was a girl.",
      "Sweet.",
      "Innocent.",
      "Quiet.",
      "...",
      "Yeah...",
      "We don't know what happened either."
    ]
  },

  // Section 8: The Brother's Official Complaint Department
  complaints: [
    {
      id: "CASE #001",
      title: "Stealing my things and pretending they're yours",
      description: "Chargers, hoodies, snacks, and personal space systematically confiscated without a warrant.",
      status: "Still under active investigation",
      threatLevel: "High",
      evidenceImage: "/photos/funny/phone_thief.jpg",
      evidenceCaption: "Subject caught red-handed with unapproved devices."
    },
    {
      id: "CASE #002",
      title: "Starting arguments and somehow making ME apologize",
      description: "Utilizes advanced psychological warfare to twist reality until I am apologizing for something that happened in 2017.",
      status: "Unresolved / Masterclass in gaslighting",
      threatLevel: "Severe",
      evidenceImage: "/photos/funny/side_eye_attitude.jpg",
      evidenceCaption: "Pre-argument facial expression detected at 20 paces."
    },
    {
      id: "CASE #003",
      title: "Taking 47 photos before accepting one",
      description: "Refuses 46 flawless angles because 'my eyebrow looks 2% asymmetrical' while eating up 12GB of cloud storage.",
      status: "Storage Damage: Catastrophic",
      threatLevel: "Critical",
      evidenceImage: "/photos/funny/photo_47_fails.jpg",
      evidenceCaption: "Exhibit A: Shot #39 where both eyes were closed."
    },
    {
      id: "CASE #004",
      title: "Eating food immediately after saying 'I don't want anything'",
      description: "Claims to not be hungry when ordering. Proceeds to consume 65% of brother's french fries upon arrival.",
      status: "Verdict: 100% Guilty",
      threatLevel: "Permanent Hazard",
      evidenceImage: "/photos/memories/cafe_candid.jpg",
      evidenceCaption: "Subject scoping the table for unattended sustenance."
    },
    {
      id: "CASE #005",
      title: "Reporting classified information directly to Mom",
      description: "Acts as a confidential informant to headquarters within 4.2 seconds of brother committing any minor infraction.",
      status: "Threat Level: Extreme",
      threatLevel: "Defcon 1",
      evidenceImage: "/photos/funny/dramatic_pout.jpg",
      evidenceCaption: "The look right before dialing Mom's number."
    }
  ],

  // Section 9: Sister Statistics
  statistics: [
    { label: "Daily Drama Level", value: 97, color: "bg-[#C4738B]" },
    { label: "Patience with Brother", value: 18, color: "bg-[#D9A066]" },
    { label: "Ability to Win Arguments Without Logic", value: 100, color: "bg-[#C5A059]" },
    { label: "Food & Snack Theft Accuracy", value: 94, color: "bg-[#E08D79]" },
    { label: "Secretly Caring About Brother", value: 100, color: "bg-[#8FA89B]" },
    { label: "Chance of Admitting Any of This", value: 3, color: "bg-[#9E829C]" }
  ],
  rating: {
    score: 5,
    verdict: "Would keep as sister.",
    subtext: "Replacement process seemed too complicated and expensive."
  },

  // Section 10: Sibling Roast Mode
  roasts: [
    {
      badge: "ROAST #01",
      title: "CEO of Unnecessary Arguments",
      punchline: "Could start a legitimate debate with a GPS navigation system and make the GPS take a detour.",
      photo: "/photos/funny/side_eye_attitude.jpg"
    },
    {
      badge: "ROAST #02",
      title: "Professional Food Thief",
      punchline: "'I just want one bite' — proceeds to leave only the plate and a napkin.",
      photo: "/photos/memories/cafe_candid.jpg"
    },
    {
      badge: "ROAST #03",
      title: "Mom's Unofficial Intelligence Agency",
      punchline: "The FBI wishes they had your response time and surveillance network.",
      photo: "/photos/funny/phone_thief.jpg"
    },
    {
      badge: "ROAST #04",
      title: "Sixth Sense for Her Belongings",
      punchline: "Can detect me breathing within a 10-meter radius of her charger while she is in a different room.",
      photo: "/photos/funny/dramatic_pout.jpg"
    },
    {
      badge: "ROAST #05",
      title: "The Emotional Paradox",
      punchline: "Claims she doesn't care about anything I do, yet calls me 8 times if I am late by 15 minutes.",
      photo: "/photos/hero/hero_duo.jpg"
    }
  ],

  // Section 11: Childhood / Memory Timeline
  timeline: [
    {
      year: "The Beginning",
      tag: "Small & Sweet",
      title: "When you were innocent",
      description: "Dressed in silk and flowers, smiling politely for the camera. We really thought you were going to stay that quiet.",
      photo: "/photos/memories/timeline_childhood.jpg",
      objectPosition: "center 10%"
    },
    {
      year: "Growing Up",
      tag: "Unbreakable Bond",
      title: "Teammates against the world",
      description: "Through every school year, every exam panic, and every family function where we made fun of everyone together.",
      photo: "/photos/memories/beach_duo.jpg",
      objectPosition: "center 15%"
    },
    {
      year: "The Syndicate",
      tag: "Family Chaos",
      title: "Looking out for each other",
      description: "We fought over tiny things, but whenever anyone else tried to bother either of us, we stood side by side.",
      photo: "/photos/memories/sky_trio.jpg",
      objectPosition: "center 82%"
    },
    {
      year: "Today",
      tag: "Always & Forever",
      title: "The person you've become",
      description: "Stronger, smarter, more resilient, and still the one person who knows how to drive me crazy and make me proud at the exact same time.",
      photo: "/photos/memories/finger_heart.jpg",
      objectPosition: "center 22%"
    }
  ],

  // Section 12: Interactive Film Strip
  filmStrip: [
    {
      photo: "/photos/memories/timeline_childhood.jpg",
      note: "Rare photographic proof she was once calm.",
      rotation: "-2deg",
      objectPosition: "center 10%"
    },
    {
      photo: "/photos/memories/beach_duo.jpg",
      note: "Probably 5 minutes before an argument.",
      rotation: "3deg",
      objectPosition: "center 15%"
    },
    {
      photo: "/photos/memories/sky_trio.jpg",
      note: "Mom definitely forced this photo.",
      rotation: "-3deg",
      objectPosition: "center 82%"
    },
    {
      photo: "/photos/funny/photo_47_fails.jpg",
      note: "Certified chaos in a single frame.",
      rotation: "2deg",
      objectPosition: "center 30%"
    },
    {
      photo: "/photos/memories/cafe_candid.jpg",
      note: "Plotting which of my fries to take.",
      rotation: "-1deg",
      objectPosition: "center 25%"
    },
    {
      photo: "/photos/memories/finger_heart.jpg",
      note: "Rare moment of sibling harmony.",
      rotation: "2.5deg",
      objectPosition: "center 22%"
    }
  ],

  // Section 13: Things I Will Never Say Out Loud
  unspokenTruths: [
    { text: "You annoy me.", pause: 800 },
    { text: "You steal my stuff.", pause: 800 },
    { text: "You argue over absolutely nothing.", pause: 800 },
    { text: "You somehow always have a complaint.", pause: 1200 },
    { text: "...", pause: 1000 },
    { text: "But...", pause: 1200 },
    { text: "You are also one of the very few people I know will always be there.", pause: 1500 },
    { text: "And I hope you know...", pause: 1200 },
    { text: "I will always, without hesitation, be there for you too.", pause: 2000 }
  ],

  // Section 14: Brother's Letter
  letter: {
    envelopePrompt: "One thing left.",
    openButton: "Open Letter",
    date: "Special Edition • Birthday Archive",
    salutation: "Dear Davani,",
    paragraphs: [
      "Happy Birthday, sis.",
      "We spend most of our time irritating each other, arguing over stupid things, stealing food, complaining, and pretending we don't care. That's probably just how siblings work.",
      "I may tease you 364 days a year, so today I'll reduce it slightly. Watching you grow into the person you're becoming is something I probably won't say much about in person, but I am genuinely so proud of you.",
      "No matter how much we fight, how old we become, where life takes us, or how busy everything gets — you will always have your brother standing behind you. Sometimes helping you. Sometimes annoying you. Probably both.",
      "I hope this year brings you genuine happiness, unstoppable confidence, huge opportunities, unforgettable memories, and everything you've been working hard toward.",
      "And whenever things don't go according to plan, remember you never have to carry everything alone.",
      "I may not say it often...",
      "but I love you. Happy Birthday, Davani. ❤️"
    ],
    signoff: "Your Brother,",
    signature: "Mahesh"
  },

  // Section 15: Cinematic Photo Montage
  montage: [
    { photo: "/photos/memories/timeline_childhood.jpg", caption: "My first enemy.", objectPosition: "center 10%" },
    { photo: "/photos/hero/hero_duo.jpg", caption: "My permanent teammate.", objectPosition: "center 30%" },
    { photo: "/photos/funny/side_eye_attitude.jpg", caption: "My biggest headache.", objectPosition: "center 15%" },
    { photo: "/photos/memories/sky_trio.jpg", caption: "My family.", objectPosition: "center 82%" },
    { photo: "/photos/memories/finger_heart.jpg", caption: "My sister.", objectPosition: "center 22%" }
  ],
  montageCloser: "Wouldn't trade you for anyone.",
  montageJoke: "...mostly.",

  // Section 16: Final Birthday Celebration
  finale: {
    badge: "THE OFFICIAL CELEBRATION",
    title: "HAPPY BIRTHDAY",
    name: "DAVANI APPALA",
    quotes: [
      "Another year older.",
      "Still annoying.",
      "Still my sister.",
      "And still one of my favourite humans."
    ],
    wishes: "May your year be as bright, loud, and unstoppable as you are. Keep shining, sis! ✨"
  },

  // Section 17: Secret "DO NOT CLICK" Button
  secretButton: {
    initialText: "DO NOT CLICK",
    states: [
      { text: "Seriously?", sub: "You were told not to click." },
      { text: "I literally said don't.", sub: "Why do you never listen to me?" },
      { text: "This is exactly why we fight.", sub: "One more click and you'll regret it." },
      { text: "Fine.", sub: "You win." }
    ],
    finaleMessage: "LOVE YOU, IDIOT ❤️",
    finaleSub: "Happy Birthday, Davani. You're the best sister I could ask for.",
    finalePhoto: "/photos/finale/secret_reaction.jpg"
  },

  // Section 18: Full Gallery
  gallery: [
    { src: "/photos/hero/hero_duo.jpg", caption: "Sunny days & genuine smiles with brother", tag: "Siblings" },
    { src: "/photos/memories/timeline_childhood.jpg", caption: "Classic traditional silk saree & gold jewelry", tag: "Childhood" },
    { src: "/photos/memories/beach_duo.jpg", caption: "Ocean breeze & beach day memories", tag: "Adventures" },
    { src: "/photos/funny/side_eye_attitude.jpg", caption: "The signature side-eye that starts 90% of arguments", tag: "Candid" },
    { src: "/photos/funny/photo_47_fails.jpg", caption: "Mid-laugh chaos while trying to pose", tag: "Funny" },
    { src: "/photos/memories/finger_heart.jpg", caption: "Korean finger heart posing like a K-drama star", tag: "Vibes" },
    { src: "/photos/memories/sky_trio.jpg", caption: "Sibling syndicate look-down perspective", tag: "Family" },
    { src: "/photos/funny/phone_thief.jpg", caption: "Deep in focus (probably texting Mom)", tag: "Daily" },
    { src: "/photos/funny/dramatic_pout.jpg", caption: "Black and white dramatic introspection", tag: "Portrait" },
    { src: "/photos/memories/cafe_candid.jpg", caption: "2:15 PM cafe lunch & laughter", tag: "Moments" }
  ],

  // Background Audio
  audio: {
    title: "Warm Acoustic Melody",
    src: "/audio/background.mp3"
  }
};
