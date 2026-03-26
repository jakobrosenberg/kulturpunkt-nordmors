import 'server-only'

import { cache } from 'react'
import { getPayload } from 'payload'

import type { Config } from '@/payload-types'
import config from '@payload-config'

import {
  defaultEventLandingData,
  mergeEventLandingData,
  type EventLandingSeedData,
} from './defaultEventLanding'

type EventLandingGlobal = Config['globals']['event-landing']

export const getEventLandingData = cache(async (): Promise<EventLandingSeedData> => {
  const payload = await getPayload({ config })

  try {
    const data = (await payload.findGlobal({
      slug: 'event-landing',
      depth: 0,
    })) as EventLandingGlobal

    return mergeEventLandingData(data)
  } catch (error) {
    console.error('Falling back to default event landing content.', error)
    return defaultEventLandingData
  }
})
