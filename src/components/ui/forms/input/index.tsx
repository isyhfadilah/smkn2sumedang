'use client'
import { HTMLProps, useMemo, useState } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

import { cn } from '@/lib/utils'

import * as config from '../config'

interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'size'> {
  className?: string
  label?: string
  hint?: React.ReactNode | string
  variant?: config.Variant
  append?: React.ReactNode | string
  prepend?: React.ReactNode | string
  containerClass?: string
  error?: string
  labelClassname?: string
  size?: config.Size
}

export const Input: React.FC<InputProps> = ({
  className,
  label,
  required,
  type: inputType,
  hint,
  variant = 'default',
  append,
  containerClass,
  error,
  prepend,
  labelClassname,
  size = 'md',
  ...rest
}) => {
  const [type, setType] = useState(inputType)

  const theme = useMemo(() => config.theme(variant), [variant])
  const sizes = useMemo(() => config.sizes(size), [size])

  return (
    <div className={cn('flex flex-col space-y-2', containerClass, type === 'hidden' && 'hidden')}>
      {label && (
        <label className={cn('text-sm text-left', theme.labelColor, labelClassname)}>
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <div className="relative">
        {prepend && inputType !== 'password' && (
          <span className="absolute text-[#8C8CA1] transform -translate-y-1/2 top-1/2 left-3 text-base">{prepend}</span>
        )}
        <input
          type={type}
          className={cn(
            'rounded-xl bg-dark focus:outline-none border w-full disabled:border-opacity-10 disabled:text-opacity-10',
            `placeholder:${theme.hintColor} placeholder:text-opacity-80`,
            theme.borderColor,
            sizes,
            className
          )}
          required={required}
          {...rest}
        />
        {inputType === 'password' && (
          <button
            type="button"
            className="absolute text-[#8C8CA1] transform -translate-y-1/2 top-1/2 right-5 text-base disabled:border-opacity-10 disabled:text-opacity-10"
            onClick={() => (type === 'password' ? setType('text') : setType('password'))}>
            {type === 'password' ? <MdVisibility className="text-lg" /> : <MdVisibilityOff className="text-lg" />}
          </button>
        )}
        {append && inputType !== 'password' && (
          <span className="absolute text-[#8C8CA1] transform -translate-y-1/2 top-1/2 right-3 text-base">{append}</span>
        )}
      </div>
      {hint && <span className={cn('text-xs font-light text-left', theme.hintColor)}>{hint}</span>}
      {error && <span className={cn('text-xs font-light text-left text-red-400', theme.hintColor)}>{error}</span>}
    </div>
  )
}
