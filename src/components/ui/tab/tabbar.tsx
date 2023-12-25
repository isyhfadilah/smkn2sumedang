interface Tab {
  label: string
}

interface Props {
  tabs: Tab[]
  activeIndex: number
  onTabClick: (index: number) => void
}

export const Tabbar = ({ tabs, activeIndex, onTabClick }: Props) => {
  return (
    <nav className="flex space-x-2xl mb-10">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`text-lg ${activeIndex === index ? 'font-bold' : 'font-light'}`}
          onClick={() => onTabClick(index)}>
          <p className="text-primary cursor-pointer">{tab.label}</p>
        </div>
      ))}
    </nav>
  )
}
