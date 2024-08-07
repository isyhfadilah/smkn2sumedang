import Container from '../../layouts/Container'
import Button from '@/components/ui/button'
import berita from '@/data/berita.json'
import { CardBerita } from '@/components/ui/cards/berita'
import { Title } from '@/components/ui/title'

export const LandingBerita = () => {
  return (
    <section className="my-16">
      <Container className="flex flex-col justify-center items-center space-y-6">
        <div className="flex flex-col items-center justify-center">
          <Title title="Berita" subtitle="Berita Terbaru" className="text-center" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {berita.slice(3).map((item, index) => (
            <CardBerita
              key={index}
              title={item.title}
              tanggal={item.tanggal}
              detail={item.detail}
              image={item.image}
              link={item.slug}
            />
          ))}
        </div>
        <Button text={'Lihat Lebih Banyak'} href="/berita" variant="primary" rounded="full" />
      </Container>
    </section>
  )
}
