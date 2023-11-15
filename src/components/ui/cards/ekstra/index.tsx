import React from 'react'
import Image from 'next/image'

interface Props {
  image: string
  title: string
  description: string
}

export const CardEkstra: React.FC<Props> = ({ image, title, description }) => {
  return (
    <figure className="space-y-2">
      <Image src={image} alt={title} height={300} width={200} className="border rounded-xl border-dark w-full" />
      <figcaption>
        <h1 className="text-3xl font-medium">{title}</h1>
        <p className="text-black/50">{description}</p>
      </figcaption>
    </figure>
  )
}
