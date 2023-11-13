import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  icon: string
  title: string
  link: string
}

export const CardJurusan: React.FC<Props> = ({ icon, title, link }) => {
  return (
    <Link href={link} className="flex space-x-4 px-2 bg-white items-center">
      <Image src={icon} alt={title} height={64} width={50}></Image>
      <h1 className="text-sm">{title}</h1>
    </Link>
  )
}
