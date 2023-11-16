'use client'
import React, { useState, useEffect } from 'react'
import Container from '../../layouts/Container'
import berita from '@/data/berita.json'
import Image from 'next/image'
import { Hero } from '../../hero'
import { CardBerita } from '@/components/ui/cards/berita'

interface DetailType {
  image: string
  title: string
  detail: string
  tanggal: string
}

export const BeritaDetail = ({ slug }: { slug: string }) => {
  const [detailData, setDetailData] = useState<DetailType>({
    image: '',
    title: '',
    detail: '',
    tanggal: ''
  })

  useEffect(() => {
    const index: number = berita.findIndex((item) => item.slug === slug)
    setDetailData(berita[index])
  }, [slug])

  return (
    <section>
      <Hero image="/images/landing/hero.png" title={detailData.title} />
      <Container className="py-16">
        <h1 className="font-bold text-3xl text-center mb-10">Berita</h1>
        <div className="flex justify-between">
          <div className="space-y-6 w-2/3 mr-16">
            <Image
              src={detailData.image}
              alt={detailData.title}
              width={600}
              height={150}
              className="rounded-lg w-full object-cover"
            />
            <h1 className="font-semibold text-2xl">{detailData.title}</h1>
            <p className="text-justify">{detailData.detail}</p>
          </div>
          <div className="space-y-3 w-1/3">
            {berita.slice(3).map((item, index) => (
              <CardBerita
                key={index}
                tanggal={item.tanggal}
                title={item.title}
                detail={item.detail}
                image={item.image}
                link={item.slug}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
