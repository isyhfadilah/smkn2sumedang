'use client'

import Container from '../../layouts/Container'
import testimoni from '@/data/testimoni.json'
import { CardTestimoni } from '@/components/ui/cards/testimoni'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export const LandingTestimoni = () => {
  return (
    <section className="my-16">
      <Container>
        <p className="text-sm text-dark">Testimoni</p>
        <h1 className="text-3xl font-medium mb-6">Karir Alumni</h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
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
