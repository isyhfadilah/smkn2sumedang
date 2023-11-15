import { BeritaDetail } from '@/components/common/sections/berita'

export default function BeritaDetails({ params }: { params: { slug: string } }) {
  return (
    <main>
      <BeritaDetail slug={params.slug} />
    </main>
  )
}
