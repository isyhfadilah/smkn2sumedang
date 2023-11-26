import Container from '../../layouts/Container'
import Image from 'next/image'
import mitra from '@/data/mitra.json'
import { Title } from '@/components/ui/title'

export const LandingMitra = () => {
  return (
    <section className="my-16">
      <Container className="flex flex-col justify-between items-center">
        <Title title="Mitra" subtitle="Mitra Industri" className="text-center" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 items-center mt-10 w-full">
          {mitra.map((item, index) => (
            <Image key={index} src={item.icon} alt={item.name} height={58} width={200} />
          ))}
        </div>
      </Container>
    </section>
  )
}
