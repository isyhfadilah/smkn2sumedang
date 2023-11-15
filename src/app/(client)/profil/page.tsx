import { Hero } from '@/components/common/hero'
import { ProfilSejarah, ProfilVisi } from '@/components/common/sections/profil/'

export default function Profil() {
  return (
    <main>
      <Hero image="/images/landing/hero.png" title="Profil SMKN 2 Sumedang" />
      <ProfilSejarah />
      <ProfilVisi />
    </main>
  )
}
