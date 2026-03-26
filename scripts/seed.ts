import 'dotenv/config'

import config from '../payload.config'
import { seedEventLanding } from '../payload/seed/seedEventLanding'
import { getPayload } from 'payload'

const seed = async () => {
  const payload = await getPayload({ config })
  await seedEventLanding(payload)
  process.exit(0)
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
