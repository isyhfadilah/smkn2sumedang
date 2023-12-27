'use client'

import { Tabbar, TabContent } from '@/components/ui/tab'
import { CardKurikulum } from '@/components/ui/cards/kurikulum'
import Container from '@/components/common/layouts/Container'
import { useState } from 'react'
import { HeroJurusan } from '@/components/common/sections/hero'

import jurusan from '@/data/mplb.json'
import { mplb } from '@/data/kurikulum'

export default function Mplb() {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = [
    '/images/jurusan/mplb/mplb-slide-1.png',
    '/images/jurusan/mplb/mplb-slide-2.png',
    '/images/jurusan/mplb/mplb-slide-3.png'
  ]

  return (
    <main>
      <HeroJurusan
        title="Manajemen Perkantoran dan Layanan Bisnis"
        description="Kompetensi Keahlian Manajemen Perkantoran dan Layanan Bisnis mempelajari segala jenis kegiatan kantor."
        images={images}
      />
      <Container className="py-16 lg:flex">
        <div className="mr-10 w-full">
          <Tabbar tabs={jurusan} activeIndex={activeIndex} onTabClick={(index) => setActiveIndex(index)} />
          <TabContent
            title={jurusan[activeIndex].title}
            description={jurusan[activeIndex]?.detail}
            subtitle={jurusan[activeIndex]?.subtitle}
            pointer={jurusan[activeIndex]?.pointer}
            icon={jurusan[activeIndex]?.icon}
            image={jurusan[activeIndex]?.image}
            name={jurusan[activeIndex]?.name}
            position={jurusan[activeIndex]?.position}
          />
        </div>
        <CardKurikulum data={mplb} />
      </Container>
    </main>
  )
}
