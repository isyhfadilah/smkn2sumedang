import Container from '../../layouts/Container'
import { Title } from '@/components/ui/title'
import { CardStruktural } from '@/components/ui/cards/struktural'
import struktural from '@/data/struktural.json'

export const ProfilStruktural = () => {
  return (
    <section className="my-16">
      <Container>
        <Title title="Struktural" subtitle="Posisi Struktural" className="text-center" />
        <div className="grid grid-cols-4 gap-6 mt-6">
          {struktural.map((item, index) => (
            <CardStruktural key={index} image={item.image} name={item.name} position={item.position} />
          ))}
        </div>
      </Container>
    </section>
  )
}
