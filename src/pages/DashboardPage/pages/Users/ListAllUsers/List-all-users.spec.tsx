import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { ListAllUsers } from './index'

describe('List all Users', () => {
  it('Should render the list of users', async () => {
    render(<ListAllUsers />)

    expect(await screen.findByText('Leanne Graham')).toBeInTheDocument()
  })
})
