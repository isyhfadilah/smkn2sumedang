'use client'

import React from 'react'
import { useState } from 'react'
import { CardBerita } from '@/components/ui/cards/berita'
import Container from '../../layouts/Container'
import Button from '@/components/ui/button'
import berita from '@/data/berita.json'

import Image from 'next/image'
import Link from 'next/link'

export const BeritaSection = () => {
  const [visibleCard, setVisibleCard] = useState(3)
  const handleLebihBanyak = () => {
    setVisibleCard(visibleCard + 3)
  }

  return (
    <section className="my-16">
      <Container className="flex flex-col justify-between">
        <h1 className="text-2xl font-semibold mb-6">Berita Terbaru</h1>
        <div className="grid grid-cols-2 gap-6 mb-16">
          <div className="space-y-3">
            <Image src={berita[0].image} alt={berita[0].title} width={600} height={400} />
            <p className="text-sm">{berita[0].tanggal}</p>
            <h1 className="text-2xl font-medium">{berita[0].title}</h1>
            <p className="text-black/50 line-clamp-3">{berita[0].detail}</p>
            <Link href={`/berita/${berita[0].slug}`} className="text-primary font-semibold underline">
              Baca Selengkapnya
            </Link>
          </div>
          <div className="flex flex-col justify-between items-end">
            {berita.slice(0, 4).map((item, index) => (
              <Link key={index} href={`/berita/${item.slug}`} className="flex gap-2">
                <div className="space-y-6 flex flex-col justify-between">
                  <h1>{item.title}</h1>
                  <p className="text-sm text-black/50">{item.tanggal}</p>
                </div>
                <Image src={item.image} alt={item.title} height={120} width={160} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <Container className="flex flex-col justify-center items-center space-y-3">
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
