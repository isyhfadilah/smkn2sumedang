import React from 'react'

interface Props {
  presentase: string
  title: string
}

export const CardData: React.FC<Props> = ({ presentase, title }) => {
  return (
    <figure className="text-white flex flex-col space-y-4 items-center">
      <h1 className="text-2xl font-bold">{presentase}</h1>
      <p className="text-lg">{title}</p>
    </figure>
  )
}
