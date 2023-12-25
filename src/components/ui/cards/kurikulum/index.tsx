import Image from 'next/image'

const data = [
  'Basis Data',
  'Sistem Komputer',
  'Pemrograman Berbasis Teks, Grafis, dan Multimedia',
  'Pemrograman Perangkat Bergerak (mobile)',
  'Pemrograman Web',
  'Pemrograman Berorientasi Objek'
]

export const CardKurikulum = () => {
  return (
    <article className="mt-10 lg:mt-0 border border-black rounded-xl py-5 px-10 w-full lg:w-1/2">
      <h1 className="capitalize text-xl font-semibold text-center mb-5">kurikulum</h1>
      <ol className="text-sm space-y-2">
        {data.map((item, index) => (
          <li key={index} className="flex items-center">
            <Image src="/icons/pointer.svg" alt="pointer" height={10} width={10} className="mr-5" />
            {[item]}
          </li>
        ))}
      </ol>
    </article>
  )
}
