import Container from '../../layouts/Container'
import Image from 'next/image'
import mitra from '@/data/mitra.json'

export const LandingMitra = () => {
  return (
    <section className="my-16">
      <Container className="flex flex-col justify-between items-center">
        <p className="text-sm text-dark">Media Partner</p>
        <h1 className="text-3xl font-medium">Mitra Industri</h1>
        <div className="grid grid-cols-4 gap-16 items-center my-16">
          {mitra.map((item, index) => (
            <Image key={index} src={item.icon} alt={item.name} height={58} width={200} />
          ))}
        </div>
      </Container>
    </section>
  )
}
