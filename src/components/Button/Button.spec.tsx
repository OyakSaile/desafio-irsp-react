import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { expect, it } from 'vitest'
import { Button } from '.'

describe('Button Component', async () => {
  it('shoud to render with default props', () => {
    render(<Button />)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass(
      'border rounded-md py-2 px-3 disabled:[rgba(216, 216, 216, 0.329)]',
    )
  })

  it('it shout to render with custom className', () => {
    render(<Button className="custom-class" />)
    const buttonElement = screen.getByRole('button')

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass(
      'border rounded-md py-2 px-3 disabled:[rgba(216, 216, 216, 0.329)] custom-class',
    )
  })
})
