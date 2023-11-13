import Container from '../../layouts/Container'
import Button from '@/components/ui/button'

export const LandingProfil = () => {
  return (
    <section className="flex py-26">
      <Container>
        <div className="border-r border-black space-y-4">
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
      </Container>
    </section>
  )
}
