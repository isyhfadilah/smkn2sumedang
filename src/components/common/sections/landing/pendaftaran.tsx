import Container from '../../layouts/Container'
import Button from '@/components/ui/button'

export const LandingPendaftaran = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="bg-primary py-16">
        <Container className="space-y-6">
          <h1 className="text-4xl text-white font-semibold">Pendaftaran Peserta Didik Baru (PPDB)</h1>
          <p className="text-white">Semua informasi mengenai pendaftaran peserta didik baru di SMK Negeri 2 Sumedang</p>
          <Button text={'Coming Soon'} variant="primary" rounded="full" href="/" className="shadow-md shadow-[#1358A0]" />
        </Container>
      </div>
      <div className="bg-secondary py-16">
        <Container className="space-y-6">
          <h1 className="text-4xl text-black font-semibold">Pemilihan Ketua Osis dan MPK</h1>
          <p className="text-black">Kunjungi laman untuk mengikuti e-voting pemilihan Ketua OSIS dan MPK 2023</p>
          <Button text={'Coming Soon'} variant="dark" rounded="full" href="/" />
        </Container>
      </div>
    </section>
  )
}
