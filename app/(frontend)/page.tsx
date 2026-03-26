import { EventLandingPage } from '@/components/EventLandingPage'
import { getEventLandingData } from '@/lib/getEventLanding'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const data = await getEventLandingData()

  return <EventLandingPage data={data} />
}
