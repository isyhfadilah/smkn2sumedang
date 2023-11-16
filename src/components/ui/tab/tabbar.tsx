import Container from '@/components/common/layouts/Container'

interface Props {
  tabs: string
}

export const Tabbar = ({ tabs }: Props) => {
  return (
    <nav className="py-56">
      <Container>
        <ul className="text-lg flex">
          <li>{tabs}</li>
        </ul>
      </Container>
    </nav>
  )
}
