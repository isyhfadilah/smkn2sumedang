import Container from '../layouts/Container'
import Link from 'next/link'
import Image from 'next/image'
import { menu } from '@/data/menu'
import { contact } from '@/data/contact'

export const Navbar = () => {
  return (
    <nav className="w-full fixed z-10 bg-white">
      <div className="bg-primary w-full py-2">
        <Container className="flex justify-end">
          <ul className="text-white text-sm flex space-x-8">
            {contact.map((item, index) => (
              <li key={index}>
                <Link href={'/'} className="flex space-x-2">
                  <Image src={item.icon} alt={item.name} width={24} height={24} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <Container className="w-full flex justify-between items-center py-5">
        <Link href="/">
          <Image src={'/icons/logo-smea-text.svg'} alt="smkn2sumedang" height={56} width={260}></Image>
        </Link>
        <ul className="flex items-center space-x-6 text-primary font-medium">
          {menu.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}
