import {
  LandingHero,
  LandingProfil,
  LandingBerita,
  LandingPendaftaran,
  LandingTestimoni
} from '@/components/common/sections/landing'

export default function Home() {
  return (
    <main>
      <LandingHero />
      <LandingProfil />
      <LandingBerita />
      <LandingPendaftaran />
      <LandingTestimoni />
    </main>
  )
}
