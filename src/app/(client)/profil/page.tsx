import { Hero } from '@/components/common/hero'
import {
  ProfilSejarah,
  ProfilVisi,
  ProfilStruktural,
  ProfilProfil,
  ProfilGalery
} from '@/components/common/sections/profil/'

export default function Profil() {
  return (
    <main>
      <Hero image="/images/landing/hero.png" title="Profil SMKN 2 Sumedang" />
      <ProfilSejarah />
      <ProfilVisi />
      <ProfilStruktural />
      <ProfilProfil />
      <ProfilGalery />
    </main>
  )
}
