import React, { useState, useEffect } from 'react'
import ScrollButton from '@/components/ui/scroll'
import Container from '@/components/common/layouts/Container'

interface Props {
  title: string
  images: string[]
  description?: string
}

export const HeroJurusan: React.FC<Props> = ({ title, images, description }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images])

  const backgroundImage = {
    backgroundImage: `url('${images[currentImageIndex]}')`
  }

  return (
    <section
      style={backgroundImage}
      className="w-full pt-68 pb-30 bg-cover bg-no-repeat bg-center text-white  transition-all duration-1000 ease-in-out">
      <Container className="space-y-4">
        <h1 className="font-semibold text-4xl lg:text-5xl lg:w-3/5">{title}</h1>
        <p className="lg:text-lg lg:w-2/3">{description}</p>
      </Container>
      <div className="flex items-center justify-center pt-10">
        <ScrollButton />
      </div>
    </section>
  )
}
