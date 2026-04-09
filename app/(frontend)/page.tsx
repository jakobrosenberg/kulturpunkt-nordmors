import type { Metadata } from 'next'

import { EventLandingPage } from '@/components/EventLandingPage'
import { getEventLandingData } from '@/lib/getEventLanding'
import type { EventLandingSeedData } from '@/lib/defaultEventLanding'

export const dynamic = 'force-dynamic'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL

export async function generateMetadata(): Promise<Metadata> {
  const data = await getEventLandingData()
  const title = buildSeoTitle(data)
  const description = buildSeoDescription(data)
  const image = siteUrl ? new URL('/images/background.png', siteUrl).toString() : undefined

  return {
    title,
    description,
    keywords: [
      'Kulturpunkt Nordmors',
      'Ejerslev Havn',
      'Nordmors',
      'kulturarrangement',
      'kunst og kultur',
      'workshops',
      'musik',
      'familiearrangement',
      '1. maj',
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    ...(siteUrl
      ? {
          alternates: {
            canonical: '/',
          },
        }
      : {}),
    openGraph: {
      title,
      description,
      locale: 'da_DK',
      type: 'website',
      siteName: 'Kulturpunkt Nordmors',
      ...(siteUrl
        ? {
            url: siteUrl,
          }
        : {}),
      ...(image
        ? {
            images: [
              {
                url: image,
                width: 1200,
                height: 630,
                alt: title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(image
        ? {
            images: [image],
          }
        : {}),
    },
  }
}

export default async function HomePage() {
  const data = await getEventLandingData()
  const structuredData = buildStructuredData(data)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <EventLandingPage data={data} />
    </>
  )
}

const buildSeoTitle = (data: EventLandingSeedData) => {
  return `${getEventName(data)} ${normalizeText(data.hero.date)} ved ${data.hero.location}`
}

const buildSeoDescription = (data: EventLandingSeedData) => {
  return `Oplev ${getEventName(data)} ${normalizeText(data.hero.date)} ved ${data.hero.location}. En dag med ${data.intro.highlight} for hele familien på Nordmors.`
}

const buildStructuredData = (data: EventLandingSeedData) => {
  const title = buildSeoTitle(data)
  const description = buildSeoDescription(data)
  const image = siteUrl ? new URL('/images/background.png', siteUrl).toString() : undefined
  const dateInfo = getStructuredEventDate(data.hero.date, data.hero.timeBadge)

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: title,
    description,
    inLanguage: 'da-DK',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    ...(dateInfo.startDate ? { startDate: dateInfo.startDate } : {}),
    ...(dateInfo.endDate ? { endDate: dateInfo.endDate } : {}),
    location: {
      '@type': 'Place',
      name: data.hero.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nordmors',
        addressCountry: 'DK',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Kulturpunkt Nordmors',
    },
    ...(siteUrl ? { url: siteUrl } : {}),
    ...(image ? { image: [image] } : {}),
  }
}

const getEventName = (data: EventLandingSeedData) => {
  return `${data.hero.titleLineOne} ${data.hero.titleLineTwo}`
}

const normalizeText = (value: string) => value.replace(/\s+/g, ' ').trim()

const getStructuredEventDate = (dateText: string, timeText: string) => {
  const normalizedDate = normalizeText(dateText)
  const normalizedTime = normalizeText(timeText).replace(/^KL\.\s*/i, '')
  const dateMatch = normalizedDate.match(/(\d{1,2})\.\s*([A-Za-zÆØÅæøå]+)\s*(\d{4})/)
  const timeMatch = normalizedTime.match(/(\d{1,2})(?::(\d{2}))?\s*[–-]\s*(\d{1,2})(?::(\d{2}))?/)

  if (!dateMatch) {
    return {}
  }

  const [, day, monthName, year] = dateMatch
  const month = monthMap[monthName.toLowerCase()]

  if (!month) {
    return {}
  }

  const isoDate = `${year}-${month}-${day.padStart(2, '0')}`

  if (!timeMatch) {
    return { startDate: isoDate }
  }

  const [, startHour, startMinute = '00', endHour, endMinute = '00'] = timeMatch

  return {
    startDate: `${isoDate}T${startHour.padStart(2, '0')}:${startMinute}`,
    endDate: `${isoDate}T${endHour.padStart(2, '0')}:${endMinute}`,
  }
}

const monthMap: Record<string, string> = {
  januar: '01',
  februar: '02',
  marts: '03',
  april: '04',
  maj: '05',
  juni: '06',
  juli: '07',
  august: '08',
  september: '09',
  oktober: '10',
  november: '11',
  december: '12',
}
