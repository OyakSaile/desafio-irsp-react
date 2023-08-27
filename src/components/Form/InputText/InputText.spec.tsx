import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { expect, it, vi } from 'vitest'
import { InputText } from '.'
import { Formik } from 'formik'

describe('InputText', () => {
  it('should to render without error', () => {
    render(
      <Formik onSubmit={vi.fn()} initialValues={{}}>
        <InputText
          label="Name"
          data-testid="custom-id"
          hasError
          errorMessage="Invalid input"
        />
      </Formik>,
    )
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should to render label when provided', () => {
    render(
      <Formik onSubmit={vi.fn()} initialValues={{}}>
        <InputText
          label="Name"
          data-testid="custom-id"
          hasError
          errorMessage="Invalid input"
        />
      </Formik>,
    )
    expect(screen.getByText('Name')).toBeInTheDocument()
  })

  it('should to render error message when hasError is true', () => {
    render(
      <Formik onSubmit={vi.fn()} initialValues={{}}>
        <InputText
          data-testid="custom-id"
          hasError
          errorMessage="Invalid input"
        />
      </Formik>,
    )
    expect(screen.getByText('Invalid input')).toBeInTheDocument()
  })

  it('shoud to applies custom className', () => {
    render(
      <Formik onSubmit={vi.fn()} initialValues={{}}>
        <InputText data-testid="custom-id" className="custom-class" />
      </Formik>,
    )

    expect(screen.getByTestId('custom-id')).toHaveClass('custom-class')
  })

  it('shoud to applies custom id', () => {
    render(
      <Formik onSubmit={vi.fn()} initialValues={{}}>
        <InputText data-testid="custom-id" id="custom-id" />
      </Formik>,
    )

    expect(screen.getByTestId('custom-id')).toHaveAttribute('id', 'custom-id')
  })

  // Adicione mais casos de teste para diferentes props e cenários
})
