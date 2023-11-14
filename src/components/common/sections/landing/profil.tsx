import Container from '../../layouts/Container'
import { CardProfil } from '@/components/ui/cards/profil'
import Button from '@/components/ui/button'
import { profil, data } from '@/data/menu'
import { CardData } from '@/components/ui/cards/data'

export const LandingProfil = () => {
  return (
    <section className="my-16">
      <Container className="grid grid-cols-2 items-center">
        <div className="border-r border-black space-y-4 w-full pr-10">
          <p className="text-sm text-dark">Profil Singkat</p>
          <h1 className="text-3xl font-medium">Terus Tumbuh dan Berkembang</h1>
          <p className="text-slate">
            Sejak didirikan pada tanggal 10 Agustus 1960, SMK Negeri 2 Sumedang secara konsisten serta kontinyu terus
            mengembangkan sistem manajemen serta pembelajaran sehingga terus tumbuh menjadi sekolah yang kompetitif sesuai
            dengan visi misi yang telah dirancang. Hingga saat ini telah berhasil menciptakan ratusan ribu lulusan yang
            agamis, kompeten, serta berdaya saing tinggi baik di tingkat nasional maupun internasional.
          </p>
          <Button text={'Selengkapnya'} href="/" variant="primary" rounded="full" />
        </div>

        <div className="grid grid-cols-2 gap-6 pl-10">
          {profil.map((item, index) => (
            <CardProfil key={index} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </Container>

      <Container className="w-full mt-16">
        <div className="bg-gradient-to-r from-[#1358A0] to-primary shadow-[#1358A0] py-10 grid grid-cols-4 rounded-lg divide-x divide-white">
          {data.map((item, index) => (
            <CardData key={index} presentase={item.presentase} title={item.title} />
          ))}
        </div>
      </Container>
    </section>
  )
}
