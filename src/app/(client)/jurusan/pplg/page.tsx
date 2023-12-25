'use client'

import { Tabbar, TabContent } from '@/components/ui/tab'
import jurusan from '@/data/jurusan.json'
import Container from '@/components/common/layouts/Container'
import { useState } from 'react'

export default function Pplg() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <main>
      <Container className="py-56">
        <Tabbar tabs={jurusan} activeIndex={activeIndex} onTabClick={(index) => setActiveIndex(index)} />
        <TabContent description={jurusan[activeIndex].title} />
      </Container>
    </main>
  )
}
