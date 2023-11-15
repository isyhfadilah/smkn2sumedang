import Container from '../../layouts/Container'
import { Title } from '@/components/ui/title'
import Button from '@/components/ui/button'
import eksttrakurikuler from '@/data/ekstrakurikuler.json'
import { CardEkstra } from '@/components/ui/cards/ekstra'

export const EkstrakurikulerSection = () => {
  return (
    <section className="my-16">
      <Container>
        <Title title="Ekstrakurikuler" subtitle="Tingkatkan Berbagai Minat dan Bakat" className="text-center" />
        <div className="grid grid-cols-4">
          {eksttrakurikuler.map((item, index) => (
            <CardEkstra key={index} image={item.image} title={item.title} description={item.description} />
          ))}
        </div>
        <Button text="Lainnya" variant="primary" />
      </Container>
    </section>
  )
}
