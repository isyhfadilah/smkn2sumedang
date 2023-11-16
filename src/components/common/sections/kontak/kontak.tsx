import Container from '../../layouts/Container'
import { Title } from '@/components/ui/title'
import { CardKontak } from '@/components/ui/cards/kontak'
import { social } from '@/data/contact'

export const KontakSection = () => {
  return (
    <section className="py-16">
      <Container>
        <Title title="Kontak" subtitle="Hubungi Kami" className="text-center" />
        <div className="grid grid-cols-3 gap-6 mt-6">
          {social.map((item, index) => (
            <CardKontak key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />
          ))}
        </div>
      </Container>
    </section>
  )
}
