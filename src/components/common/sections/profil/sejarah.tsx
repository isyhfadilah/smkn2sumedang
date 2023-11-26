import Container from '../../layouts/Container'
import Image from 'next/image'
import { Title } from '@/components/ui/title'

export const ProfilSejarah = () => {
  return (
    <section className="my-16">
      <Container className="w-full flex flex-wrap-reverse lg:flex-nowrap justify-between items-center lg:space-x-10">
        <Image src="/images/profil/sejarah.png" alt="sejarah-smkn2sumedang" height={480} width={480} />
        <div className="space-y-3 w-full lg:w-4/5 mb-10 lg:mb-0">
          <Title title="Sejarah" subtitle="SMK Negeri 2 Sumedang" />
          <p>
            Merupakan salah satu sekolah kejuruan negeri yang ada di Kabupaten Sumedang. Telah berdiri sejak 10 Agustus 1960
            dalam sebuah upacara sederhana dan khidmat dengan nama SMEA yang berstatus sebagai sekolah swasta.{' '}
          </p>
          <p>
            Pada tanggal 1 Agustus 1965 SMEA berubah status dari Swasta berubah nama menjadi Sekolah Negeri dengan Surat
            keputusan Menteri Pendidikan dan Kebudayaan Republik Indonesia no 411/B.3/Kedj. Selanjutnya SMEA Negeri Sumedang
            Berubah nama menjadi SMK NEGERI 2 SUMEDANG. Juni 2004, SMK NEGERI 2 SUMEDANG membuka program keahlian Rekayasa
            Perangkat Lunak, merupakan program re-engenering Dikmenjur. Sehingga pada saat ini, SMKN 2 Sumedang memiliki 4
            kompetensi keahlian yakni Akuntansi dan Keuangan Lembaga, Otomatisasi dan Tata Kelola Perkantoran, Bisnis Daring
            dan Pemasaran, serta Rekayasa Perangkat Lunak.
          </p>
        </div>
      </Container>
    </section>
  )
}
