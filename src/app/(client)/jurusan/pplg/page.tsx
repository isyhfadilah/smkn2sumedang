'use client'

import { Tabbar, TabContent } from '@/components/ui/tab'
import { CardKurikulum } from '@/components/ui/cards/kurikulum'
import jurusan from '@/data/jurusan.json'
import Container from '@/components/common/layouts/Container'
import { useState } from 'react'
import { HeroJurusan } from '@/components/common/sections/hero'

export default function Pplg() {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = [
    '/images/jurusan/pplg/pplg-slide-1.png',
    '/images/jurusan/pplg/pplg-slide-2.png',
    '/images/jurusan/pplg/pplg-slide-3.png'
  ]

  return (
    <main>
      <HeroJurusan
        title="Pengembangan Perangkat Lunak dan Gim"
        description="Salah satu kompetensi keahlian di SMKN 2 Sumedang dalam bidang Teknologi Komputer dan Informatika."
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
        <CardKurikulum />
      </Container>
    </main>
  )
}
