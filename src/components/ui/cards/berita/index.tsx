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
      <Image src={image} alt={title} height={200} width={200} className="w-full rounded-lg" />
      <figcaption className="space-y-2 mt-2">
        <p className="text-sm font-medium">{tanggal}</p>
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="my-4 line-clamp-3">{detail}</p>
        <Link href={`/berita/${link}`} className="text-primary font-semibold underline">
          Baca Selengkapnya
        </Link>
      </figcaption>
    </figure>
  )
}
