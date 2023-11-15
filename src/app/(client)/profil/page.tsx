import { Hero } from '@/components/common/hero'
import { ProfilSejarah } from '@/components/common/sections/profil/sejarah'

export default function Profil() {
  return (
    <main>
      <Hero image="/images/landing/hero.png" title="Profil SMKN 2 Sumedang" />
      <ProfilSejarah />
    </main>
  )
}
