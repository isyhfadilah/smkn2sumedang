import React from 'react'

interface Props {
  image: string
  name: string
  position: string
}

export const CardStruktural: React.FC<Props> = ({ image, name, position }) => {
  const backgroundImage = {
    backgroundImage: `url('${image}')`
  }

  return (
    <figure style={backgroundImage} className="bg-cover bg-no-repeat bg-center cursor-pointer rounded-lg">
      <h1 className="font-bold text-white text-lg">{name}</h1>
      <p className="text-white">{position}</p>
    </figure>
  )
}
