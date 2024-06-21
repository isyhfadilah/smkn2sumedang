import Container from '../../layouts/Container'
import { Title } from '@/components/ui/title'
import fasilitas from '@/data/fasilitas.json'
import Image from 'next/image'

export const ProfilGalery = () => {
  return (
    <section className="my-16">
      <Container className="w-full">
        <Title title="Galeri" subtitle="Fasilitas" className="text-center" />
        <div className="flex flex-wrap gap-6 items-center justify-between mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
            {fasilitas.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt={item}
                height={1000}
                width={1000}
                className="w-100 h-50 bg-cover bg-center bg-no-repeat object-cover"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
