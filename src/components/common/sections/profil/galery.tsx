import Container from '../../layouts/Container'
import { Title } from '@/components/ui/title'
import fasilitas from '@/data/fasilitas.json'

export const ProfilGalery = () => {
  return (
    <section className="my-16">
      <Container className="w-full">
        <Title title="Galeri" subtitle="Fasilitas" className="text-center" />
        <div className="flex flex-wrap gap-6 items-center justify-between mt-10">
          {fasilitas.map((item, index) => (
            <img key={index} src={item} alt={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}
