import React from 'react'
import Image from 'next/image'

interface Props {
  icon: string
  title: string
  description: string
}

export const CardProfil: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <figure className="py-4 px-2 bg-white space-y-2">
      <Image src={icon} alt={title} height={35} width={35} />
      <figcaption className="space-y-2">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-slate">{description}</p>
      </figcaption>
    </figure>
  )
}
