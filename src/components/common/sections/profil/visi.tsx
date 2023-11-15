import { Title } from '@/components/ui/title'
import Container from '../../layouts/Container'

export const ProfilVisi = () => {
  return (
    <section className="w-full py-16 bg-[#F8F9FF]">
      <Container className="flex justify-between space-x-10">
        <div>
          <Title title="Tentang Sekolah" subtitle="Visi dan Misi SMKN 2 Sumedang" />
          <p className="text-gray mt-2">
            Inti identitas sekolah, yang tercermin dalam Visi Misi yang dipegang teguh oleh seluruh stakeholder sekolah.
          </p>
        </div>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-6 space-y-3">
            <h1 className="text-2xl font-medium">Visi</h1>
            <p>
              Terwujudnya SMK Negeri 2 Sumedang sebagai penyedia Sumber Daya Manusia yang agamis, mandiri dan berdaya saing
              tinggi di tingkat Nasional dan Internasional.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 space-y-3">
            <h1 className="text-2xl font-medium">Misi</h1>
            <ul className="space-y-2">
              <li>Meningkatkan keimanan dan ketaqwaan seluruh warga</li>
              <li>Meningkatkan Profesionalisme SDM Pengelola</li>
              <li>Melaksanakan pola pembalajaran yang mengarah ke Life Skill dalam bidang jasa dan Teknologi Informasi</li>
              <li>Menumbuhkembangkan pola kemitraan baik dengan masyarakat maupun dunia usaha dan dunia industri</li>
              <li>Menumbuhkembangkan pola kemitraan baik dengan masyarakat maupun dunia usaha dan dunia industri</li>
              <li>Mengembangkan fungsi SMK kearah pusat penelitian dalam bidang jasa</li>
              <li>
                Mengadakan dan mengoptimalkan pemeliharaan / pemanfaatan sarana prasarana pendidikan serta efisiensi
                penggunaan dana
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
