interface Props {
  description?: string
}

export const TabContent = ({ description }: Props) => {
  return <p>{description}</p>
}
