import { HTMLProps, useMemo } from 'react'

import { cn } from '@/lib/utils'

import * as config from '../config'

interface TextAreaProps extends Omit<HTMLProps<HTMLTextAreaElement>, 'size'> {
  className?: string
  label?: string
  hint?: string
  variant?: config.Variant
  append?: React.ReactNode | string
  containerClass?: string
  error?: string
  size?: config.Size
}

export const TextArea: React.FC<TextAreaProps> = ({
  className,
  label,
  required,
  hint,
  variant = 'default',
  containerClass,
  error,
  size = 'md',
  ...rest
}) => {
  const theme = useMemo(() => config.theme(variant), [variant])
  const sizes = useMemo(() => config.sizes(size), [size])

  return (
    <div className={cn('flex flex-col space-y-2', containerClass)}>
      {label && (
        <label className={cn('text-sm text-left', theme.labelColor)}>
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <div className="relative">
        <textarea
          rows={3}
          className={cn(
            'px-4 py-3 rounded-xl bg-transparent focus:outline-none border w-full font-light disabled:border-opacity-10 disabled:text-opacity-10 bg-dark',
            `placeholder:${theme.hintColor} placeholder:text-opacity-80`,
            theme.borderColor,
            sizes,
            className
          )}
          required={required}
          {...rest}
        />
      </div>
      {hint && <span className={cn('text-xs font-light text-left', theme.hintColor)}>{hint}</span>}
      {error && <span className={cn('text-xs font-light text-left text-red-400', theme.hintColor)}>{error}</span>}
    </div>
  )
}
