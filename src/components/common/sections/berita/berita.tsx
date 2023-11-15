'use client'

import React from 'react'
import { useState } from 'react'
import { CardBerita } from '@/components/ui/cards/berita'
import Container from '../../layouts/Container'
import Button from '@/components/ui/button'
import berita from '@/data/berita.json'

export const BeritaSection = () => {
  const [visibleCard, setVisibleCard] = useState(3)
  const handleLebihBanyak = () => {
    setVisibleCard(visibleCard + 3)
  }

  return (
    <section className="my-16">
      <Container className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-3 gap-6 mb-6">
          {berita.slice(0, visibleCard).map((item, index) => (
            <CardBerita
              key={index}
              image={item.image}
              title={item.title}
              detail={item.detail}
              tanggal={item.tanggal}
              link={item.slug}
            />
          ))}
        </div>
        <Button onClick={handleLebihBanyak} text="Lebih Banyak" variant="primary" rounded="full" />
      </Container>
    </section>
  )
}
