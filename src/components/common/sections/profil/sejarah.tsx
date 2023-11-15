import Container from '../../layouts/Container'

export const ProfilSejarah = () => {
  return (
    <section className="my-16">
      <Container className="flex justify-between items-center">
        <div className="space-y-3">
          <div className="space-y-2">
            <p className="text-secondary text-sm font-medium">Sejarah</p>
            <h1 className="text-2xl font-semibold">SMK Negeri 2 Sumedang</h1>
          </div>
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
