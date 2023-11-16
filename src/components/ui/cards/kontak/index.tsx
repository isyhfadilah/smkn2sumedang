import React from 'react'
import Image from 'next/image'

interface Props {
  icon: string
  title: string
  subtitle: string
}

export const CardKontak: React.FC<Props> = ({ icon, title, subtitle }) => {
  return (
    <figure className="flex gap-6 bg-white rounded-lg shadow-lg p-4  items-center">
      <Image src={icon} alt={title} width={38} height={38} />
      <figcaption className="flex flex-col justify-center text-sm">
        <p className="font-bold">{title}</p>
        <p className="font-medium">{subtitle}</p>
      </figcaption>
    </figure>
  )
}
