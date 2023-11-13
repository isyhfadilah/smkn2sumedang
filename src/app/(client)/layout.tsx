import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SMKN 2 Sumedang',
  description:
    'SMKN 2 Sumedang (Tanggguh dan Terampil) Ceria, Empati, Rasional, Damai, Aktif, Sabar, Bersih, Elok, Tulus, Iman, Konsiste, Amanah.'
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <React.Fragment>{children}</React.Fragment>
}
