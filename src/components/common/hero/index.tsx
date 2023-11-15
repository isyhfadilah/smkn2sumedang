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
    <section style={backgroundImage} className="py-36 bg-cover bg-no-repeat bg-center">
      <h1 className="text-white font-medium text-2xl text-center">{title}</h1>
    </section>
  )
}
