import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { SideMenu } from './index'

describe('SideMenu', () => {
  it('Should be render the SideMenu', () => {
    render(<SideMenu />)

    const usersLink = screen.getByText('Users')

    expect(usersLink).toBeInTheDocument()
  })
})
