'use client'
import { useMemo } from 'react'
import ReactSelect, { Props } from 'react-select'

import { cn } from '@/lib/utils'

import * as config from '../config'

type ItemOption = {
  label?: string
  value?: string
}
export interface SelectProps extends Props {
  name?: string
  className?: string
  label?: string
  hint?: string
  variant?: config.Variant
  required?: boolean
  placeholder?: string
  items?: ItemOption[]
  value?: ItemOption[]
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void
  onChange?: (value: any) => void
  isMulti?: boolean
  size?: config.Size
}

export const Select: React.FC<SelectProps> = ({
  hint,
  variant,
  label,
  required,
  placeholder,
  className,
  items = [],
  setFieldValue,
  name,
  onChange,
  isMulti = false,
  size = 'md',
  ...props
}) => {
  const handleChange = (selectedOptions: ItemOption[]) => {
    if (!name) return
    setFieldValue?.(name, selectedOptions)
    onChange?.(selectedOptions)
  }

  const theme = useMemo(() => config.theme(variant), [variant])
  const sizes = useMemo(() => config.sizes(size), [size])

  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && (
        <label className={cn('text-sm text-left', theme.labelColor)}>
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <ReactSelect
        isMulti={isMulti}
        name="colors"
        options={items}
        className={cn('', `placeholder:${theme.hintColor} placeholder:text-opacity-80`, theme.borderColor, className)}
        classNamePrefix="select"
        placeholder={placeholder}
        classNames={{
          container: () => cn('p-0'),
          control: () =>
            cn(
              '!rounded-xl !bg-dark !focus:outline-none !border !w-full !disabled:border-opacity-10 !disabled:text-opacity-10',
              theme.borderColor,
              className,
              sizes
            ),
          dropdownIndicator: () => cn('!text-white'),
          clearIndicator: () => cn('!text-white'),
          placeholder: () => cn(`!text-white !text-opacity-50`),
          menu: () => cn('!bg-dark !rounded-xl'),
          option: () => cn('!bg-dark hover:!bg-dark-gray !rounded-xl !bg-opacity-50'),
          multiValue: () => cn('!bg-dark-gray !rounded-xl !bg-opacity-50'),
          multiValueLabel: () => cn('!text-white border-l border-b border-t border-gray-500 !rounded-r-none'),
          singleValue: () => cn('!text-white'),
          multiValueRemove: () =>
            cn('!text-white hover:!bg-danger border-t border-b border-r !rounded-l-none border-gray-500')
        }}
        isClearable
        onChange={(e: any) => {
          handleChange(e)
        }}
        {...props}
      />
      {hint && <span className={cn('text-xs', theme.hintColor)}>{hint}</span>}
    </div>
  )
}
