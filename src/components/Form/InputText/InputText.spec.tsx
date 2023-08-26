import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { expect, it, vi } from 'vitest'
import { InputText } from '.'

it('should to render input element with correct props', () => {
  const label = 'Username'
  const id = 'username'
  const className = 'input-field'
  const hasError = false
  const onChange = vi.fn()

  render(
    <InputText
      label={label}
      id={id}
      className={className}
      hasError={hasError}
      onChange={onChange}
    />,
  )

  const inputElement = screen.getByLabelText(label)
  expect(inputElement).toBeInTheDocument()
  expect(inputElement).toHaveAttribute('id', id)
  expect(inputElement).toHaveClass(className)
  expect(inputElement).not.toHaveClass('border-red-500')
  expect(inputElement).toHaveValue('')
})

it('should to render input element with error class when hasError prop is true', () => {
  const label = 'Username'
  const id = 'username'
  const className = 'input-field'
  const hasError = true
  const onChange = vi.fn()

  render(
    <InputText
      label={label}
      id={id}
      className={className}
      hasError={hasError}
      onChange={onChange}
    />,
  )

  const inputElement = screen.getByLabelText(label)
  expect(inputElement).toHaveClass('border-red-500')
})
