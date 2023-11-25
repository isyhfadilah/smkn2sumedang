import {
  LandingHero,
  LandingProfil,
  LandingBerita,
  LandingPendaftaran,
  LandingTestimoni,
  LandingMitra
} from '@/components/common/sections/landing'

export default function Home() {
  return (
    <main className="bg-pink">
      <LandingHero />
      <LandingProfil />
      <LandingBerita />
      <LandingPendaftaran />
      <LandingTestimoni />
      <LandingMitra />
    </main>
  )
}
