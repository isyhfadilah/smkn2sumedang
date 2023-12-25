interface Props {
  title?: string
  subtitle?: string
  description?: string
  // pointer?: array
}

export const TabContent = ({ title, description, subtitle }: Props) => {
  return (
    <div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-sm">{subtitle}</p>
      <p className="text-base font-light mt-5">{description}</p>
    </div>
  )
}
