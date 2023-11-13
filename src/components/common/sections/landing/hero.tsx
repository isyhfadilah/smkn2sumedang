import Container from '../../layouts/Container'
import Button from '@/components/ui/button'

export const LandingHero = () => {
  const sectionStyle = {
    backgroundImage: `url('/images/landing/hero.png')`
  }

  return (
    <section style={sectionStyle} className="py-56 bg-cover bg-center bg-no-repeat">
      <Container className="flex flex-col justify-center space-y-6">
        <h1 className="text-white/50 font-medium">Motto</h1>
        <p className="text-white text-lg font-semibold w-1/2">
          SMKN 2 Sumedang (Tanggguh dan Terampil) Ceria, Empati, Rasional, Damai, Aktif, Sabar, Bersih, Elok, Tulus, Iman,
          Konsiste, Amanah.
        </p>
        <div>
          <Button
            text={'Contact Us'}
            href="/"
            variant="primary"
            rounded="full"
            className="bg-gradient-to-r from-[#1358A0]  to-primary shadow-[#1358A0]"
          />
        </div>
      </Container>
    </section>
  )
}
