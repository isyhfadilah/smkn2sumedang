import React from 'react'
import Image from 'next/image'

interface Props {
  title?: string
  subtitle?: string
  description?: string
  pointer?: string[] | undefined
  icon?: string
}

export const TabContent = ({ title, description, subtitle, pointer, icon }: Props) => {
  return (
    <div>
      <div className="flex items-center">
        {icon && <Image src={icon} alt={icon} height={40} width={40} className="mr-5" />}
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-sm">{subtitle}</p>
        </div>
      </div>

      <p className="text-base font-light mt-5">{description}</p>
      <ul className="space-y-2">
        {pointer?.map((item, index) => (
          <li className="list-disc ml-4 pl-2 text-dark" key={index}>
            <span className="text-black">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
