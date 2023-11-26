'use client'

import { useState } from 'react'
import Container from '../../layouts/Container'
import { Title } from '@/components/ui/title'
import Button from '@/components/ui/button'
import eksttrakurikuler from '@/data/ekstrakurikuler.json'
import { CardEkstra } from '@/components/ui/cards/ekstra'

export const EkstrakurikulerSection = () => {
  const [visibleCard, setVisibleCard] = useState(6)

  const handleLainnya = () => {
    setVisibleCard(visibleCard + 3)
  }

  return (
    <section className="my-16">
      <Container className="flex justify-center flex-col items-center">
        <Title title="Ekstrakurikuler" subtitle="Tingkatkan Berbagai Minat dan Bakat" className="text-center" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-26 my-16">
          {eksttrakurikuler.slice(0, visibleCard).map((item, index) => (
            <CardEkstra key={index} image={item.image} title={item.title} description={item.description} />
          ))}
        </div>
        <Button onClick={handleLainnya} text="Lainnya" variant="primary" rounded="full" />
      </Container>
    </section>
  )
}
