import type { Payload } from 'payload'

import { defaultEventLandingData } from '../../lib/defaultEventLanding'

export const seedEventLanding = async (payload: Payload) => {
  const existing = await payload.findGlobal({
    slug: 'event-landing',
    overrideAccess: true,
  })

  if (existing?.hero?.titleLineOne && existing?.program?.items?.length) {
    return
  }

  await payload.updateGlobal({
    slug: 'event-landing',
    data: defaultEventLandingData,
    overrideAccess: true,
  })

  payload.logger.info('Seeded the event landing global with the current site content.')
}
