import { LandingHero, LandingProfil, LandingBerita, LandingPendaftaran } from '@/components/common/sections/landing'

export default function Home() {
  return (
    <main>
      <LandingHero />
      <LandingProfil />
      <LandingBerita />
      <LandingPendaftaran />
    </main>
  )
}
