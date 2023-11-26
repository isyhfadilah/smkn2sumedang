import React from 'react'

interface Props {
  title: string
  image: string
  description?: string
}

export const Hero: React.FC<Props> = ({ title, image, description }) => {
  const backgroundImage = {
    backgroundImage: `url('${image}')`
  }

  return (
    <section style={backgroundImage} className="pt-56 pb-36 lg:pb-26 bg-cover bg-no-repeat bg-center text-white">
      <h1 className="font-semibold text-2xl lg:text-3xl text-center">{title}</h1>
      <p className="text-center">{description}</p>
    </section>
  )
}
