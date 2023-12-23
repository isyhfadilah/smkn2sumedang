import Link from 'next/link'

interface Props {
  tabs: string
  onclick: any
}

export const Tabbar = ({ tabs, onclick }: Props) => {
  return (
    <nav className="py-56">
      <ul>
        <li>
          <Link href="#" onClick={onclick} className="text-lg">
            {tabs}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
