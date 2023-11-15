'use client'
import React, { useState, useEffect } from 'react'
import Container from '../../layouts/Container'
import berita from '@/data/berita.json'
import Image from 'next/image'
import { Hero } from '../../hero'

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
        <div className="space-y-3">
          <Image src={detailData.image} alt={detailData.title} width={600} height={200} className="rounded-lg" />
          <h1 className="font-semibold text-2xl">{detailData.title}</h1>
          <p>{detailData.detail}</p>
        </div>
      </Container>
    </section>
  )
}
