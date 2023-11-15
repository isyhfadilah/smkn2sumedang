import React from 'react'

interface Props {
  title: string
  image: string
}

export const Hero: React.FC<Props> = ({ title, image }) => {
  const backgroundImage = {
    backgroundImage: `url('${image}')`
  }

  return (
    <section style={backgroundImage} className="pt-56 pb-26 bg-cover bg-no-repeat bg-center">
      <h1 className="text-white font-semibold text-3xl text-center">{title}</h1>
    </section>
  )
}
