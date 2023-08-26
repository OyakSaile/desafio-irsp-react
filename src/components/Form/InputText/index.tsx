import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hasError?: boolean
}
export const InputText: React.FC<InputTextProps> = ({
  label,
  className,
  id,
  hasError = false,
  ...rest
}) => {
  const inputClassName = twMerge(
    'border rounded-md py-2 px-3 mt-2',
    hasError ? 'border-red-500' : '',
    className,
  )

  return (
    <div className="flex flex-col">
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} className={inputClassName} {...rest} type="text" />
    </div>
  )
}
