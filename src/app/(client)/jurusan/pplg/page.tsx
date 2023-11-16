import { Tabbar } from '@/components/ui/tab'
import jurusan from '@/data/jurusan.json'

export default function Pplg() {
  return (
    <main>
      {jurusan.map((item, index) => (
        <Tabbar key={index} tabs={item.label} />
      ))}
    </main>
  )
}
