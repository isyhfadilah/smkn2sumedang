import Container from '../../layouts/Container'
import Button from '@/components/ui/button'

export const LandingBerita = () => {
  return (
    <section className="my-16">
      <Container className="flex flex-col justify-center items-center space-y-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-dark">Berita</p>
          <h1 className="text-3xl font-semibold">Berita Terbaru</h1>
        </div>
        <Button text={'Lihat Lebih Banyak'} href="/" variant="primary" rounded="full" />
      </Container>
    </section>
  )
}
