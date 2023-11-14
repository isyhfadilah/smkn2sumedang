import React from 'react'
import Image from 'next/image'

interface Props {
  icon: string
  title: string
  description: string
}

export const CardProfil: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <figure className="py-4 px-3 bg-white rounded-lg space-y-2 shadow-md cursor-pointer hover:bg-[#2E90FA] hover:text-white">
      <Image src={icon} alt={title} height={64} width={64} />
      <figcaption className="space-y-2">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-sm">{description}</p>
      </figcaption>
    </figure>
  )
}
