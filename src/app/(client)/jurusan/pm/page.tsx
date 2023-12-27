'use client'

import { Tabbar, TabContent } from '@/components/ui/tab'
import { CardKurikulum } from '@/components/ui/cards/kurikulum'
import Container from '@/components/common/layouts/Container'
import { useState } from 'react'
import { HeroJurusan } from '@/components/common/sections/hero'

import jurusan from '@/data/pm.json'
import { pm } from '@/data/kurikulum'

export default function Pm() {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = [
    '/images/jurusan/pm/pm-slide-1.png',
    '/images/jurusan/pm/pm-slide-2.png',
    '/images/jurusan/pm/pm-slide-3.png'
  ]

  return (
    <main>
      <HeroJurusan
        title="Pemasaran"
        description="Jurusan yang mempelajari seluk beluk pasar secara meluas termasuk menciptakan produk yang berkualitas."
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
        <CardKurikulum data={pm} />
      </Container>
    </main>
  )
}
