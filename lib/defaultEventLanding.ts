export type ProgramTag = 'scene' | 'music' | 'food'
export type ActivityCategory = 'workshop' | 'children' | 'nature' | 'music'

export type EventLandingSeedData = {
  hero: {
    titleLineOne: string
    titleLineTwo: string
    subtitle: string
    date: string
    location: string
    timeBadge: string
  }
  intro: {
    lead: string
    highlight: string
    body: string
    stats: Array<{
      value: string
      label: string
    }>
  }
  program: {
    sectionLabel: string
    sectionTitle: string
    items: Array<{
      time: string
      title: string
      description: string
      tag: ProgramTag
    }>
  }
  activities: {
    sectionLabel: string
    sectionTitle: string
    items: Array<{
      category: ActivityCategory
      title: string
      description: string
    }>
  }
  food: {
    sectionLabel: string
    sectionTitle: string
    items: Array<{
      name: string
      description: string
    }>
  }
  market: {
    sectionLabel: string
    sectionTitle: string
    exhibitors: Array<{
      name: string
    }>
  }
  practical: {
    sectionLabel: string
    sectionTitle: string
    items: Array<{
      title: string
      description: string
    }>
  }
  footer: {
    title: string
    details: string
    note: string
  }
}

type MergeableEventLanding = {
  hero?: Partial<EventLandingSeedData['hero']> | null
  intro?: {
    lead?: string | null
    highlight?: string | null
    body?: string | null
    stats?: Array<
      EventLandingSeedData['intro']['stats'][number] & {
        id?: string | null
      }
    > | null
  } | null
  program?: {
    sectionLabel?: string | null
    sectionTitle?: string | null
    items?: Array<
      EventLandingSeedData['program']['items'][number] & {
        id?: string | null
      }
    > | null
  } | null
  activities?: {
    sectionLabel?: string | null
    sectionTitle?: string | null
    items?: Array<
      EventLandingSeedData['activities']['items'][number] & {
        id?: string | null
      }
    > | null
  } | null
  food?: {
    sectionLabel?: string | null
    sectionTitle?: string | null
    items?: Array<
      EventLandingSeedData['food']['items'][number] & {
        id?: string | null
      }
    > | null
  } | null
  market?: {
    sectionLabel?: string | null
    sectionTitle?: string | null
    exhibitors?: Array<
      EventLandingSeedData['market']['exhibitors'][number] & {
        id?: string | null
      }
    > | null
  } | null
  practical?: {
    sectionLabel?: string | null
    sectionTitle?: string | null
    items?: Array<
      EventLandingSeedData['practical']['items'][number] & {
        id?: string | null
      }
    > | null
  } | null
  footer?: Partial<EventLandingSeedData['footer']> | null
}

export const defaultEventLandingData: EventLandingSeedData = {
  hero: {
    titleLineOne: 'Kulturpunkt',
    titleLineTwo: 'Nordmors',
    subtitle: 'Kunst · Kultur · Fællesskab',
    date: '1. Maj\n2026',
    location: 'Ejerslev Havn',
    timeBadge: 'KL. 10 – 17',
  },
  intro: {
    lead: 'En hel dag med',
    highlight: 'kunst, musik, workshops, mad og fællesskab',
    body: "ved Ejerslev Havn — midt i Nordmors' fantastiske molerlandskab. Oplev lokale kunstnere, syng med koret, lav pileflet, jag fossiler, og smag det bedste fra det nordmorsanske køkken.",
    stats: [
      { value: '6+', label: 'Workshops' },
      { value: '9+', label: 'Madboder' },
      { value: '7', label: 'Timer' },
    ],
  },
  program: {
    sectionLabel: 'Program',
    sectionTitle: 'Scenen i Kulturteltet',
    items: [
      {
        time: '10:00',
        title: 'Åbningstale',
        description: 'Ved Anne Marie Heide, Region Nordjylland',
        tag: 'scene',
      },
      {
        time: '10:30',
        title: 'Kunst- og Kulturtale',
        description: 'Lars Røntved, Udvalget for Børn, Kultur og Turisme, Morsø Kommune',
        tag: 'scene',
      },
      {
        time: '13:00',
        title: 'Musical Indslag',
        description: 'Naturfriskolen fremfører musical',
        tag: 'music',
      },
      {
        time: '15:00',
        title: 'Nordmors Koret',
        description: 'Fællessang og korsang i kulturteltet',
        tag: 'music',
      },
    ],
  },
  activities: {
    sectionLabel: 'Workshops & Aktiviteter',
    sectionTitle: 'Noget for alle',
    items: [
      {
        category: 'workshop',
        title: 'Broderi',
        description: 'Lær broderikunsten med Anna Marie Room i kulturteltet.',
      },
      {
        category: 'workshop',
        title: 'Maleri',
        description: 'Mal med Anette og lad dig inspirere af molerlandskabet.',
      },
      {
        category: 'workshop',
        title: 'Pileflet',
        description: 'Thy Mors Husflid og Gitte Erlandsen viser pilfletning.',
      },
      {
        category: 'workshop',
        title: 'Gong & Folkedans',
        description: 'Mærk vibrationerne og dans med Anna Marie Room.',
      },
      {
        category: 'nature',
        title: 'Naturvandring',
        description: "Henrik Madsen guider jer gennem Ejerslev's berømte fossiler.",
      },
      {
        category: 'nature',
        title: 'Vandsport',
        description: 'Prøv vandsport ved havnen med udstyr fra Bjergby.',
      },
      {
        category: 'nature',
        title: 'Stenklubben & UNESCO',
        description: "John og Dorthe fortæller om Mors' unikke geologi.",
      },
      {
        category: 'children',
        title: 'Børneaktiviteter',
        description:
          'Lego, sæbekassebiler, skattejagt, fællessang og bålhytte med Morsø Naturklub.',
      },
    ],
  },
  food: {
    sectionLabel: 'Mad & Drikke',
    sectionTitle: 'Smag Nordmors',
    items: [
      { name: 'Cafe Den Blå Lagune', description: 'Café klassikere ved havnen' },
      { name: 'Det Lille Planterige', description: 'Plantebaseret mad' },
      { name: 'Ban Thai Wat', description: 'Autentisk thailandsk' },
      { name: 'Signes Permakultur-køkkenvogn', description: 'Bæredygtig mad' },
      { name: 'Grøn Thy', description: 'Grønne retter fra Thy' },
      { name: 'Evas Kaffe & Loppefund', description: 'Kaffe og hygge' },
      { name: 'Ole Købmand', description: 'Lokale specialiteter' },
      {
        name: 'Sejler Køkkenet',
        description: 'Nye naboer laver mad — Else Christensens linsesuppe',
      },
      { name: 'Mary Ann', description: 'Hjemmelavet' },
    ],
  },
  market: {
    sectionLabel: 'Marked & Udstilling',
    sectionTitle: 'Krea-Kræmmermarked',
    exhibitors: [
      { name: 'Dansk Mohair' },
      { name: 'Thy Mors Husflid — stenhuggere & trædrejning' },
      { name: 'Nice4U' },
      { name: 'Liesbeth Singeling — glaskunst' },
      { name: 'Astrid Løkken Camping' },
      { name: 'Slap Af' },
      { name: 'Lene Shannon' },
      { name: 'Stenklubben — UNESCO, John & Dorthe' },
      { name: 'Foreninger fra Nordmors' },
    ],
  },
  practical: {
    sectionLabel: 'Praktisk',
    sectionTitle: 'Godt at vide',
    items: [
      {
        title: 'Hvor',
        description: 'Ejerslev Havn, Nordmors. Parkering ved havnen.',
      },
      {
        title: 'Hvornår',
        description: 'Fredag d. 1. maj 2026, kl. 10 – 17. Markedsteltet åbner kl. 10:15.',
      },
      {
        title: 'For hele familien',
        description:
          'Gratis aktiviteter for børn hele dagen — Lego, sæbekassebiler, bålhytte og skattejagt.',
      },
    ],
  },
  footer: {
    title: 'Kulturpunkt Nordmors',
    details: '1. Maj 2026 · Ejerslev Havn · Kl. 10–17',
    note: 'Kunst & Kultur fra Sundby i vest, Dråby i øst og Feggeklit i nord — langs Molerstriben',
  },
}

const pickArray = <T>(value: T[] | null | undefined, fallback: T[]) => {
  return value && value.length > 0 ? value : fallback
}

const pickValue = <T>(value: T | null | undefined, fallback: T) => {
  return value ?? fallback
}

export const mergeEventLandingData = (
  data?: MergeableEventLanding | null,
): EventLandingSeedData => {
  return {
    hero: {
      titleLineOne: pickValue(data?.hero?.titleLineOne, defaultEventLandingData.hero.titleLineOne),
      titleLineTwo: pickValue(data?.hero?.titleLineTwo, defaultEventLandingData.hero.titleLineTwo),
      subtitle: pickValue(data?.hero?.subtitle, defaultEventLandingData.hero.subtitle),
      date: pickValue(data?.hero?.date, defaultEventLandingData.hero.date),
      location: pickValue(data?.hero?.location, defaultEventLandingData.hero.location),
      timeBadge: pickValue(data?.hero?.timeBadge, defaultEventLandingData.hero.timeBadge),
    },
    intro: {
      lead: pickValue(data?.intro?.lead, defaultEventLandingData.intro.lead),
      highlight: pickValue(data?.intro?.highlight, defaultEventLandingData.intro.highlight),
      body: pickValue(data?.intro?.body, defaultEventLandingData.intro.body),
      stats: pickArray(data?.intro?.stats, defaultEventLandingData.intro.stats),
    },
    program: {
      sectionLabel: pickValue(
        data?.program?.sectionLabel,
        defaultEventLandingData.program.sectionLabel,
      ),
      sectionTitle: pickValue(
        data?.program?.sectionTitle,
        defaultEventLandingData.program.sectionTitle,
      ),
      items: pickArray(data?.program?.items, defaultEventLandingData.program.items),
    },
    activities: {
      sectionLabel: pickValue(
        data?.activities?.sectionLabel,
        defaultEventLandingData.activities.sectionLabel,
      ),
      sectionTitle: pickValue(
        data?.activities?.sectionTitle,
        defaultEventLandingData.activities.sectionTitle,
      ),
      items: pickArray(data?.activities?.items, defaultEventLandingData.activities.items),
    },
    food: {
      sectionLabel: pickValue(data?.food?.sectionLabel, defaultEventLandingData.food.sectionLabel),
      sectionTitle: pickValue(data?.food?.sectionTitle, defaultEventLandingData.food.sectionTitle),
      items: pickArray(data?.food?.items, defaultEventLandingData.food.items),
    },
    market: {
      sectionLabel: pickValue(
        data?.market?.sectionLabel,
        defaultEventLandingData.market.sectionLabel,
      ),
      sectionTitle: pickValue(
        data?.market?.sectionTitle,
        defaultEventLandingData.market.sectionTitle,
      ),
      exhibitors: pickArray(data?.market?.exhibitors, defaultEventLandingData.market.exhibitors),
    },
    practical: {
      sectionLabel: pickValue(
        data?.practical?.sectionLabel,
        defaultEventLandingData.practical.sectionLabel,
      ),
      sectionTitle: pickValue(
        data?.practical?.sectionTitle,
        defaultEventLandingData.practical.sectionTitle,
      ),
      items: pickArray(data?.practical?.items, defaultEventLandingData.practical.items),
    },
    footer: {
      title: pickValue(data?.footer?.title, defaultEventLandingData.footer.title),
      details: pickValue(data?.footer?.details, defaultEventLandingData.footer.details),
      note: pickValue(data?.footer?.note, defaultEventLandingData.footer.note),
    },
  }
}
