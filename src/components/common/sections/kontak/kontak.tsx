import Container from '../../layouts/Container'
import { Title } from '@/components/ui/title'
import { CardKontak } from '@/components/ui/cards/kontak'
import { social } from '@/data/contact'
import Image from 'next/image'
import { Input } from '@/components/ui/forms'

export const KontakSection = () => {
  return (
    <section className="flex">
      <Container className="w-3/5 py-36">
        <Container>
          <Title title="Kontak" subtitle="Hubungi Kami" className="text-center" />
          <form action="">
            <Input label="name" />
            <Input label="name" />
            <Input label="name" />
          </form>
          <div className="grid grid-cols-3 gap-2 mt-6">
            {social.map((item, index) => (
              <CardKontak key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />
            ))}
          </div>
        </Container>
      </Container>
      <div className="bg-primary w-2/5 py-56 flex items-center justify-center">
        <Image src={'/icons/logo-smea.svg'} alt="logo-smea" width={200} height={200} />
      </div>
    </section>
  )
}
