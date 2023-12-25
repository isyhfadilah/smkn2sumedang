import React from 'react'

interface Props {
  title?: string
  subtitle?: string
  description?: string
  pointer?: string[] | undefined
}

export const TabContent = ({ title, description, subtitle, pointer }: Props) => {
  return (
    <div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-sm">{subtitle}</p>
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
