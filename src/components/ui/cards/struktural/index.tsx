import React from 'react'

interface Props {
  image: string
  name: string
  position: string
}

export const CardStruktural: React.FC<Props> = ({ image, name, position }) => {
  return (
    <article
      className="md:w-[280px] md:h-[340px] w-[160px] h-[220px] p-4 md:p-6 relative rounded-lg border-b-8 border-[#002C55] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${image}')` }}>
      <div className="text-white mt-auto h-40 absolute bottom-0 right-0 left-0 p-4 bg-gradient-to-b from-transparent to-[#0058AB]">
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <p className="font-bold md:text-xl">{name}</p>
          <p className="text-xs font-medium md:text-sm">{position}</p>
        </div>
      </div>
    </article>
  )
}
