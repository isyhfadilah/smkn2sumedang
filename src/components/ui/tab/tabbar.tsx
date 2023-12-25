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
    <nav className="flex space-x-2 lg:space-x-5xl mb-10">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`${
            activeIndex === index ? 'text-black font-medium  border-b-2 border-primary' : 'font-light text-black/50'
          }`}
          onClick={() => onTabClick(index)}>
          <p className="lg:text-lg cursor-pointer">{tab.label}</p>
        </div>
      ))}
    </nav>
  )
}
