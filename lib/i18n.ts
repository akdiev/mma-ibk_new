export type Lang = 'de' | 'en'

export const translations = {
  de: {
    // Nav
    nav: {
      about: 'Über uns',
      schedule: 'Trainingsplan',
      coaches: 'Coaches',
      news: 'Neuigkeiten',
      contact: 'Kontakt',
    },
    // Hero
    hero: {
      eyebrow: 'Innsbruck, Österreich · Seit 2014',
      title1: "TIROLS",
      title2: "GRÖSSTES",
      title3: "KAMPFSPORT",
      subtitle: "ACADEMY",
      cta1: 'Probetraining buchen',
      cta2: 'Trainingsplan ansehen',
    },
    // Stats
    stats: {
      members: 'Mitglieder',
      area: 'Trainingsfläche',
      years: 'Jahre Erfahrung',
      disciplines: 'Disziplinen',
    },
    // About
    about: {
      eyebrow: 'Über uns',
      heading: 'Mehr als nur ein Gym',
      p1: 'Seit unserer Gründung im Jahr 2014 haben wir uns von einem reinen MMA-Trainingszentrum zu Tirols größtem und modernstem Kampfsportgym entwickelt.',
      p2: 'Mit erfahrenen Trainern, modernstem Equipment und über 400 engagierten Mitgliedern bieten wir ein einzigartiges Trainingserlebnis für alle Level – vom Anfänger bis zum Profi.',
      p3: 'Im Jahr 2024 haben wir unser gesamtes Gym umgebaut und modernisiert, um unseren Mitgliedern eine noch bessere Trainingsumgebung zu bieten.',
      cta: 'Probetraining vereinbaren',
    },
    // Disciplines
    disciplines: {
      eyebrow: 'Was wir anbieten',
      heading: 'Unsere Disziplinen',
      items: [
        { name: 'MMA', desc: 'Mixed Martial Arts für alle Level – von Anfänger bis Fortgeschrittene.' },
        { name: 'Kick-Thai-Boxen', desc: 'Kickboxen & Muay Thai – Schlag- und Tritttechniken auf höchstem Niveau.' },
        { name: 'Brazilian Jiu Jitsu', desc: 'BJJ & Grappling – Bodenkampf und Würgetechniken für alle.' },
        { name: 'Frauen Kickboxen', desc: 'Exklusives Kickboxtraining nur für Frauen – sicher, stark, selbstbewusst.' },
        { name: 'Kinder Kickboxen / BJJ', desc: 'Kampfsport für Kinder ab 7 Jahren – Disziplin, Spaß & Teamgeist.' },
      ],
    },
    // Schedule
    schedule: {
      eyebrow: 'Trainingszeiten',
      heading: 'Trainingsplan',
      subheading: 'Zwei Trainingsräume · 200m² · Montag bis Samstag',
      filterAll: 'Alle',
      days: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    },
    // Coaches
    coaches: {
      eyebrow: 'Das Team',
      heading: 'Unsere Coaches',
    },
    // News
    news: {
      eyebrow: 'Aktuelles',
      heading: 'Neuigkeiten & Events',
      readMore: 'Mehr erfahren',
    },
    // Contact
    contact: {
      eyebrow: 'Kontakt',
      heading: 'Kostenloses Probetraining',
      subheading: 'Tritt dem größten Kampfsportcenter Tirols bei. Kontaktiere uns für dein kostenloses Probetraining.',
      firstName: 'Vorname',
      lastName: 'Nachname',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      message: 'Nachricht',
      messagePlaceholder: 'Welche Disziplin interessiert dich? Hast du Vorerfahrung?',
      submit: 'Nachricht senden',
      submitting: 'Wird gesendet...',
      success: 'Danke! Wir melden uns bald bei dir.',
      error: 'Fehler beim Senden. Bitte versuche es erneut.',
      whatsapp: 'Via WhatsApp anfragen',
      address: 'Grabenweg 67b, A-6020 Innsbruck',
      hours: 'Mo–Fr: 07:00–22:00 · Sa: 09:00–18:00',
    },
    // Footer
    footer: {
      impressum: 'Impressum',
      privacy: 'Datenschutz',
      rights: 'Alle Rechte vorbehalten',
      designed: 'Designed with ❤️ for MMA-IBK',
    },
  },

  en: {
    nav: {
      about: 'About',
      schedule: 'Schedule',
      coaches: 'Coaches',
      news: 'News',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Innsbruck, Austria · Since 2014',
      title1: "TYROL'S",
      title2: "BIGGEST",
      title3: "MARTIAL ARTS",
      subtitle: "ACADEMY",
      cta1: 'Book a trial session',
      cta2: 'View schedule',
    },
    stats: {
      members: 'Members',
      area: 'Training area',
      years: 'Years of experience',
      disciplines: 'Disciplines',
    },
    about: {
      eyebrow: 'About us',
      heading: 'More than just a gym',
      p1: 'Since our founding in 2014, we have grown from a pure MMA training center into Tyrol\'s largest and most modern martial arts gym.',
      p2: 'With experienced coaches, state-of-the-art equipment and over 400 dedicated members, we offer a unique training experience for all levels – from beginner to professional.',
      p3: 'In 2024 we completely renovated and modernized our gym to provide our members with an even better training environment.',
      cta: 'Book a trial session',
    },
    disciplines: {
      eyebrow: 'What we offer',
      heading: 'Our disciplines',
      items: [
        { name: 'MMA', desc: 'Mixed Martial Arts for all levels – from beginner to advanced.' },
        { name: 'Kick-Thai Boxing', desc: 'Kickboxing & Muay Thai – striking techniques at the highest level.' },
        { name: 'Brazilian Jiu Jitsu', desc: 'BJJ & Grappling – ground combat and submission techniques for everyone.' },
        { name: "Women's Kickboxing", desc: 'Exclusive kickboxing training for women only – safe, strong, confident.' },
        { name: 'Kids Kickboxing / BJJ', desc: 'Martial arts for children from age 7 – discipline, fun & teamwork.' },
      ],
    },
    schedule: {
      eyebrow: 'Training times',
      heading: 'Schedule',
      subheading: 'Two training rooms · 200m² · Monday to Saturday',
      filterAll: 'All',
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    coaches: {
      eyebrow: 'The team',
      heading: 'Our coaches',
    },
    news: {
      eyebrow: 'Latest',
      heading: 'News & Events',
      readMore: 'Read more',
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Free trial training',
      subheading: "Join Tyrol's biggest martial arts center. Contact us for your free trial session.",
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email address',
      phone: 'Phone number',
      message: 'Message',
      messagePlaceholder: 'Which discipline interests you? Do you have prior experience?',
      submit: 'Send message',
      submitting: 'Sending...',
      success: 'Thank you! We will get back to you soon.',
      error: 'Error sending. Please try again.',
      whatsapp: 'Contact via WhatsApp',
      address: 'Grabenweg 67b, A-6020 Innsbruck',
      hours: 'Mon–Fri: 07:00–22:00 · Sat: 09:00–18:00',
    },
    footer: {
      impressum: 'Legal notice',
      privacy: 'Privacy policy',
      rights: 'All rights reserved',
      designed: 'Designed with ❤️ for MMA-IBK',
    },
  },
} as const

export type Translations = typeof translations['de']
