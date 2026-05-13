export type DisciplineKey = 'MMA' | 'Kick-Thai' | 'BJJ' | 'Frauen' | 'Kinder' | 'Boxen'

export interface ScheduleEntry {
  time: string
  name: string
  discipline: DisciplineKey
  room: 1 | 2
  coach?: string
}

export type DaySchedule = {
  [day: string]: ScheduleEntry[]
}

export const DISCIPLINE_COLORS: Record<DisciplineKey, string> = {
  'MMA':      'bg-red-900/60 border-red-700/50 text-red-200',
  'Kick-Thai':'bg-orange-900/60 border-orange-700/50 text-orange-200',
  'BJJ':      'bg-blue-900/60 border-blue-700/50 text-blue-200',
  'Frauen':   'bg-pink-900/60 border-pink-700/50 text-pink-200',
  'Kinder':   'bg-yellow-900/60 border-yellow-700/50 text-yellow-200',
  'Boxen':    'bg-purple-900/60 border-purple-700/50 text-purple-200',
}

export const schedule: DaySchedule = {
  Mo: [
    { time: '07:00–08:00', name: 'MMA Morgentraining',    discipline: 'MMA',      room: 1 },
    { time: '17:00–18:30', name: 'Kick-Thai Basics',      discipline: 'Kick-Thai', room: 1 },
    { time: '18:00–19:30', name: 'BJJ All Levels',        discipline: 'BJJ',      room: 2 },
    { time: '19:30–21:00', name: 'MMA Advanced',          discipline: 'MMA',      room: 1 },
    { time: '19:30–21:00', name: 'Kick-Thai Fortgeschr.', discipline: 'Kick-Thai', room: 2 },
  ],
  Di: [
    { time: '07:00–08:00', name: 'BJJ Morgentraining',    discipline: 'BJJ',      room: 1 },
    { time: '16:00–17:00', name: 'Kinder Kickboxen',      discipline: 'Kinder',   room: 2 },
    { time: '17:00–18:30', name: 'Frauen Kickboxen',      discipline: 'Frauen',   room: 1 },
    { time: '18:30–20:00', name: 'BJJ Advanced',          discipline: 'BJJ',      room: 2 },
    { time: '19:00–20:30', name: 'MMA Sparring',          discipline: 'MMA',      room: 1 },
  ],
  Mi: [
    { time: '07:00–08:00', name: 'Kick-Thai Morgen',      discipline: 'Kick-Thai', room: 1 },
    { time: '17:00–18:30', name: 'MMA Basics',            discipline: 'MMA',      room: 1 },
    { time: '17:00–18:30', name: 'BJJ Basics',            discipline: 'BJJ',      room: 2 },
    { time: '18:30–20:00', name: 'Kick-Thai Advanced',    discipline: 'Kick-Thai', room: 1 },
    { time: '19:00–20:30', name: 'Boxen All Levels',      discipline: 'Boxen',    room: 2 },
  ],
  Do: [
    { time: '07:00–08:00', name: 'MMA Morgentraining',    discipline: 'MMA',      room: 1 },
    { time: '16:00–17:00', name: 'Kinder BJJ',            discipline: 'Kinder',   room: 2 },
    { time: '17:00–18:30', name: 'Frauen Kickboxen',      discipline: 'Frauen',   room: 1 },
    { time: '18:00–19:30', name: 'BJJ All Levels',        discipline: 'BJJ',      room: 2 },
    { time: '19:30–21:00', name: 'MMA Advanced',          discipline: 'MMA',      room: 1 },
  ],
  Fr: [
    { time: '07:00–08:00', name: 'BJJ Open Mat',          discipline: 'BJJ',      room: 1 },
    { time: '17:00–18:30', name: 'Kick-Thai All Levels',  discipline: 'Kick-Thai', room: 1 },
    { time: '17:30–19:00', name: 'MMA All Levels',        discipline: 'MMA',      room: 2 },
    { time: '19:00–20:30', name: 'Grappling / BJJ',       discipline: 'BJJ',      room: 1 },
    { time: '19:00–20:30', name: 'Kick-Thai Sparring',    discipline: 'Kick-Thai', room: 2 },
  ],
  Sa: [
    { time: '10:00–11:30', name: 'MMA Open Training',     discipline: 'MMA',      room: 1 },
    { time: '10:00–11:30', name: 'BJJ Open Mat',          discipline: 'BJJ',      room: 2 },
    { time: '11:30–13:00', name: 'Kick-Thai Seminar',     discipline: 'Kick-Thai', room: 1 },
  ],
}

export const coaches = [
  {
    id: 1,
    name: 'Ermin Hodzic',
    nameValue: 'ermin',
    image: '/coaches/ermin.jpg',
    discipline: 'MMA / BJJ',
    bio_de: 'Vorstandsmitglied und Headcoach des MMA-IBK. BJJ Purple Belt mit jahrelanger Wettkampferfahrung im MMA.',
    bio_en: 'Board member and head coach of MMA-IBK. BJJ Purple Belt with years of competitive MMA experience.',
    since: '2014',
  },
  {
    id: 2,
    name: 'Victor Duarte',
    nameValue: 'victor',
    image: '/coaches/victor.png',
    discipline: 'Brazilian Jiu Jitsu',
    bio_de: 'BJJ Black Belt und Cheftrainer für Brazilian Jiu Jitsu. Leitet das Grappling-Programm auf höchstem Niveau.',
    bio_en: 'BJJ Black Belt and head instructor for Brazilian Jiu Jitsu. Leads the grappling program at the highest level.',
    since: '2014',
  },
  {
    id: 3,
    name: 'Fabian Troger',
    nameValue: 'fabian',
    image: '/coaches/fabian.jpg',
    discipline: 'Boxen / Kickboxen',
    bio_de: 'Vorstandsmitglied und Spezialist für Boxen und Kickboxen. Betreut auch das Frauen- und Kinderprogramm.',
    bio_en: 'Board member and specialist in boxing and kickboxing. Also coaches the women\'s and children\'s program.',
    since: '2014',
  },
  {
    id: 4,
    name: 'Hannes Schneider',
    nameValue: 'hannes',
    image: '/coaches/hannes.jpg',
    discipline: 'MMA / Fight Coach',
    bio_de: 'Obmann-Stellvertreter und Fight Coach. Langjährige Erfahrung im MMA-Wettkampfsport.',
    bio_en: 'Deputy chairman and fight coach. Long-standing experience in competitive MMA.',
    since: '2014',
  },
  {
    id: 5,
    name: 'Mag. David Zieger',
    nameValue: 'david',
    image: '/coaches/david.jpg',
    discipline: 'Krav Maga / MMA',
    bio_de: 'Obmann des MMA-IBK und zertifizierter Krav-Maga-Instruktor. Verantwortlich für die Vereinsführung.',
    bio_en: 'Chairman of MMA-IBK and certified Krav Maga instructor. Responsible for club management.',
    since: '2014',
  },
  {
    id: 6,
    name: 'Oscar Ulrich',
    nameValue: 'oscar',
    image: '/coaches/oscar.jpg',
    discipline: 'Krav Maga',
    bio_de: 'Vorstandsmitglied und Krav-Maga-Instruktor. Trainiert Selbstverteidigung und Kampfkondition.',
    bio_en: 'Board member and Krav Maga instructor. Trains self-defence and combat conditioning.',
    since: '2015',
  },
]

export const newsItems = [
  {
    id: 1,
    date_de: 'Samstag, 21. Juni 2025',
    date_en: 'Saturday, June 21, 2025',
    title_de: 'INNFERNO 9 – Innsbruck',
    title_en: 'INNFERNO 9 – Innsbruck',
    desc_de: 'Nach dem Erfolg der bisherigen Veranstaltungen kehrt INNFERNO 9 nach Innsbruck zurück. MMA-IBK Athleten werden vertreten sein!',
    desc_en: 'Following the success of previous events, INNFERNO 9 returns to Innsbruck. MMA-IBK athletes will be represented!',
    link: 'https://www.innferno.at/innferno-fc-8/',
    logo: 'https://www.mma-ibk.at/wp-content/uploads/2024/03/Innferno_Logo_black.png',
    tag: 'EVENT',
  },
  {
    id: 2,
    date_de: 'Samstag, 26. April 2025',
    date_en: 'Saturday, April 26, 2025',
    title_de: 'Charity Boxen – Kampf gegen Gewalt',
    title_en: 'Charity Boxing – Fight against violence',
    desc_de: 'HUZI-HELP präsentiert die zweite Charity-Box-Veranstaltung. Der Kampf gegen Gewalt an Frauen und Kindern.',
    desc_en: 'HUZI-HELP presents the second charity boxing event. The fight against violence against women and children.',
    link: 'https://www.charity-boxen.at/',
    logo: 'https://www.mma-ibk.at/wp-content/uploads/2024/03/MMA-IBK_Charity-Boxen.at_.png',
    tag: 'CHARITY',
  },
]

export const sponsors = [
  { name: 'SPS-West',      url: 'http://www.sps-west.at',      logo: 'https://www.mma-ibk.at/wp-content/uploads/2024/03/MMA-IBK_sps-west-Logo.png' },
  { name: 'INNFERNO MMA',  url: 'http://www.innferno.at',      logo: 'https://www.mma-ibk.at/wp-content/uploads/2024/03/MMA-IBK_INNFERNO.png' },
  { name: 'Charity-Boxen', url: 'http://www.charity-boxen.at', logo: 'https://www.mma-ibk.at/wp-content/uploads/2024/03/MMA-IBK_Charity-Boxen.at_.png' },
  { name: 'Westwork',      url: 'http://www.westwork.at',      logo: 'https://www.mma-ibk.at/wp-content/uploads/2024/03/MMA-IBK_westwork.png' },
]
