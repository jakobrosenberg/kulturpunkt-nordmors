import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import './globals.css'

export const metadata: Metadata = {
  title: 'Kulturpunkt Nordmors — 1. Maj 2026',
  description:
    'Kunst, kultur, workshops, mad og fællesskab ved Ejerslev Havn på Nordmors.',
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
