import Container from '../../layouts/Container'
import { Title } from '@/components/ui/title'
import { CardStruktural } from '@/components/ui/cards/struktural'
import struktural from '@/data/struktural.json'

export const ProfilStruktural = () => {
  return (
    <section className="my-16">
      <Container className="flex flex-col items-center">
        <Title title="Struktural" subtitle="Posisi Struktural" className="text-center" />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {struktural.map((item, index) => (
            <CardStruktural key={index} image={item.image} name={item.name} position={item.position} />
          ))}
        </div>
      </Container>
    </section>
  )
}
