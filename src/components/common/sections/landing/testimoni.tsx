'use client'

import Container from '../../layouts/Container'
import testimoni from '@/data/testimoni.json'
import { CardTestimoni } from '@/components/ui/cards/testimoni'
import { Title } from '@/components/ui/title'
import { useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export const LandingTestimoni = () => {
  const [slidesPerView, setSlidesPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(3)
      } else if (window.innerWidth >= 480) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(1)
      }
    }

    // initial setup
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.addEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="my-16">
      <Container>
        <Title title="Testimoni" subtitle="Karir Alumni" className="mb-6" />
        <Swiper
          spaceBetween={20}
          slidesPerView={slidesPerView}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {testimoni.map((item, index) => (
            <SwiperSlide key={index}>
              <CardTestimoni name={item.name} image={item.image} position={item.position} testimoni={item.testimoni} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}
