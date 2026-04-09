import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: 'Kulturpunkt Nordmors',
  description: 'Kunst, kultur og fællesskab på Nordmors.',
}

type Props = {
  children: ReactNode
}

export default function FrontendLayout({ children }: Props) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  )
}
