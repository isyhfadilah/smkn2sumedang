'use client'

import Container from '../layouts/Container'
import Link from 'next/link'
import Image from 'next/image'
import { menu } from '@/data/menu'
import { contact } from '@/data/contact'
import { cn } from '@/lib/utils'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

import { IoClose, IoMenu } from 'react-icons/io5'
import { Transition, Menu } from '@headlessui/react'

export const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="w-full fixed z-10 bg-white">
      <div className="hidden lg:block bg-primary w-full py-2">
        <Container className="flex justify-end">
          <ul className="text-white text-sm flex space-x-8">
            {contact.map((item, index) => (
              <li key={index}>
                <Link href={'/'} className="flex space-x-2">
                  <Image src={item.icon} alt={item.name} width={18} height={18} />
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
        <ul className="flex items-center space-x-6">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={cn(
                  'hidden lg:block text-primary',
                  pathname === item.link ? 'font-bold text-[#065986]' : 'font-medium'
                )}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {isOpen ? (
          <IoClose onClick={() => setIsOpen(!isOpen)} size={35} className="lg:hidden text-primary cursor-pointer" />
        ) : (
          <IoMenu onClick={() => setIsOpen(!isOpen)} size={35} className="lg:hidden text-primary cursor-pointer" />
        )}
      </Container>

      <Transition
        show={isOpen}
        enter="transition-all duration-500"
        enterFrom="max-h-0 opacity-0"
        leave="transition-all duration-1000"
        leaveFrom="max-h-screen opacity-100"
        leaveTo="max-h-0 opacity-0"
        className="bg-white px-5 pt-5 h-screen lg:hidden">
        <Menu>
          <Container>
            <ul className="flex flex-col space-y-10">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={cn(
                      'text-primary text-lg',
                      pathname === item.link ? 'font-bold text-[#065986]' : 'font-medium'
                    )}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Menu>
      </Transition>
    </nav>
  )
}
