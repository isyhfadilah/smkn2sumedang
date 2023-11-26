import React from 'react'

interface Props {
  title: string
  subtitle: string
  className?: string
}

export const Title: React.FC<Props> = ({ title, subtitle, className }) => {
  const baseClasses = 'space-y-2'

  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses

  return (
    <div className={combinedClasses}>
      <p className="text-sm text-secondary font-medium">{title}</p>
      <h1 className="text-3xl font-semibold">{subtitle}</h1>
    </div>
  )
}
