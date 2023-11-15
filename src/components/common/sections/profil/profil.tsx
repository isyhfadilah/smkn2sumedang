import { Title } from '@/components/ui/title'
import Container from '../../layouts/Container'
import Link from 'next/link'
import Image from 'next/image'

export const ProfilProfil = () => {
  const backgroundImage = {
    backgroundImage: `url(/images/profil/profil.png)`
  }
  return (
    <section className="my-16">
      <Container className="flex flex-col items-center justify-center">
        <Title
          title="Profil"
          subtitle="Raihlah Masa Depan Gemilang bersama SMKN 2 Sumedang"
          className="w-1/2 flex justify-center items-center flex-col text-center"
        />
        <div
          style={backgroundImage}
          className="py-56 bg-cover bg-no-repeat bg-center w-full mt-6 rounded-xl flex justify-center">
          <Link href={'/'} className="">
            <div className="bg-dark/50 rounded-full p-2">
              <Image
                src={'/icons/fi_play.svg'}
                alt="play"
                height={48}
                width={48}
                className="bg-secondary rounded-full p-2"
              />
            </div>
          </Link>
        </div>
      </Container>
    </section>
  )
}
