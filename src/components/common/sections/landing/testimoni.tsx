import Container from '../../layouts/Container'
import testimoni from '@/data/testimoni.json'
import { CardTestimoni } from '@/components/ui/cards/testimoni'

export const LandingTestimoni = () => {
  return (
    <section className="my-16">
      <Container>
        <p className="text-sm text-dark">Testimoni</p>
        <h1 className="text-3xl font-medium">Karir Alumni</h1>
        <div className="grid grid-cols-4 mt-6">
          {testimoni.map((item, index) => (
            <CardTestimoni
              key={index}
              name={item.name}
              image={item.image}
              position={item.position}
              testimoni={item.testimoni}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
