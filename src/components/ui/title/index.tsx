import React from 'react'

interface Props {
  title: string
  subtitle: string
}

export const Title: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="space-y-2">
      <p className="text-sm text-secondary font-medium">{title}</p>
      <h1 className="text-2xl font-semibold">{subtitle}</h1>
    </div>
  )
}
