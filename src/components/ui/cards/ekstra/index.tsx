import React from 'react'
import Image from 'next/image'

interface Props {
  image: string
  title: string
  description: string
}

export const CardEkstra: React.FC<Props> = ({ image, title, description }) => {
  return (
    <figure>
      <Image src={image} alt={title} height={200} width={200} className="border rounded-lg border-dark" />
      <figcaption className="space-y-3">
        <h1 className="text-3xl font-medium">{title}</h1>
        <p>{description}</p>
      </figcaption>
    </figure>
  )
}
