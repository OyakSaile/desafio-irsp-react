import React, { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface InputTextProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<InputTextProps> = ({ ...rest }) => {
  return (
    <button
      className={twMerge(
        'border rounded-md py-2 px-3 disabled:bg-black',
        rest.className,
      )}
      {...rest}
    />
  )
}
