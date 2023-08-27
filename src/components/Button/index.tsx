import React, { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ className, ...rest }) => {
  return (
    <button
      className={twMerge(
        'border rounded-md py-2 px-3 disabled:[rgba(216, 216, 216, 0.329)] hover:brightness-90',
        className,
      )}
      {...rest}
    />
  )
}
