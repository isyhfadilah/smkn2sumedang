import React from 'react'
import Image from 'next/image'

interface Props {
  image: string
  name: string
  position: string
  testimoni: string
}

export const CardTestimoni: React.FC<Props> = ({ image, name, position, testimoni }) => {
  return (
    <figure className="bg-white py-6 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#1358A0] hover:to-primary">
      <div className="flex">
        <Image src={image} alt={name} height={50} width={50} />
        <div className="space-y-3 text-white">
          <h1 className="text-lg font-medium">{name}</h1>
          <p className="text-sm">{position}</p>
        </div>
      </div>
      <figcaption className="text-white">“{testimoni}“</figcaption>
    </figure>
  )
}
