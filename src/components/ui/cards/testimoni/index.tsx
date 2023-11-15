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
    <figure className="bg-[#F8F9FF] py-6 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#1358A0] hover:to-primary hover:text-white">
      <div className="flex space-x-4">
        <Image src={image} alt={name} height={85} width={50} className="rounded-full object-cover w-[85px] h-[85px]" />
        <div className="space-y-1">
          <h1 className="text-lg font-medium">{name}</h1>
          <p className="text-sm">{position}</p>
        </div>
      </div>
      <figcaption className="mt-4">“{testimoni}“</figcaption>
    </figure>
  )
}
