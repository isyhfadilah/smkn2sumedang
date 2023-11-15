import Container from '../../layouts/Container'
import Button from '@/components/ui/button'
import berita from '@/data/berita.json'
import { CardBerita } from '@/components/ui/cards/berita'

export const LandingBerita = () => {
  return (
    <section className="my-16">
      <Container className="flex flex-col justify-center items-center space-y-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-dark">Berita</p>
          <h1 className="text-3xl font-semibold">Berita Terbaru</h1>
        </div>
        <div className="grid grid-cols-3 gap-6 pt-4">
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
