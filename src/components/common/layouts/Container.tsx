import { cn } from '@/lib/utils'

interface ContainerProps {
  className?: string
  children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn(className, 'container sm:w-10/12 mx-auto px-4')}>{children}</div>
}

export default Container
