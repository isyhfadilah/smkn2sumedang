import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  tanggal: string
  image: string
  title: string
  detail: string
  link: string
}

export const CardBerita: React.FC<Props> = ({ tanggal, image, title, detail, link }) => {
  return (
    <figure className="shadow-lg border  py-4 px-3 bg-white rounded-lg">
      <Image src={image} alt={title} height={48} width={48} className="w-full rounded-lg object-cover" />
      <figcaption className="space-y-2">
        <p className="text-sm font-medium">{tanggal}</p>
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="py-4">{detail}</p>
        <Link href={link} className="text-primary font-semibold underline">
          Baca Selengkapnya
        </Link>
      </figcaption>
    </figure>
  )
}
