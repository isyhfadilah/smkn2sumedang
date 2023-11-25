import Container from '../../layouts/Container'
import Button from '@/components/ui/button'
import { CardJurusan } from '@/components/ui/cards/jurusan'
import { jurusan } from '@/data/menu'

export const LandingHero = () => {
  const sectionStyle = {
    backgroundImage: `url('/images/landing/hero.png')`
  }

  return (
    <section style={sectionStyle} className="pt-64 pb-46 md:pb-0 pt-56 bg-cover bg-center bg-no-repeat">
      <Container className="w-full flex flex-col justify-center space-y-6">
        <p className="text-white text-lg font-semibold w-full lg:w-1/2">
          SMKN 2 Sumedang (Tanggguh dan Terampil) Ceria, Empati, Rasional, Damai, Aktif, Sabar, Bersih, Elok, Tulus, Iman,
          Konsiste, Amanah.
        </p>
        <div>
          <Button text={'Contact Us'} href="/kontak" variant="primary" rounded="full" />
        </div>
      </Container>
      <div className="hidden md:block mt-26 bg-white py-6 shadow-md">
        <Container className="grid grid-cols-4 divide-x divide-black">
          {jurusan.map((item, index) => (
            <CardJurusan key={index} title={item.name} icon={item.icon} link={item.link} />
          ))}
        </Container>
      </div>
    </section>
  )
}
