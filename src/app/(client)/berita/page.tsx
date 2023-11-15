import { Hero } from '@/components/common/hero'
import { BeritaSection } from '@/components/common/sections/berita'

export default function Berita() {
  return (
    <main>
      <Hero
        title="Berita"
        image="/images/landing/hero.png"
        description="Informasi tentang kegiatan, Prestasi dan Acara di SMKN 2 Sumedang"
      />
      <BeritaSection />
    </main>
  )
}
