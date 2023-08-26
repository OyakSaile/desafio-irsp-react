import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { expect, it } from 'vitest'
import { LoadingSpin } from '.'

describe('LoadingSpin', () => {
  it('should render nothing when isLoading is false', () => {
    render(<LoadingSpin isLoading={false} />)

    const loadingSpinner = screen.queryByTestId('loading-spinner')

    expect(loadingSpinner).toBeNull()
  })

  it('should render loading spinner when isLoading is true', () => {
    render(<LoadingSpin isLoading={true} />)

    const loadingSpinner = screen.getByTestId('loading-spinner')

    expect(loadingSpinner).toBeInTheDocument()
  })
})
