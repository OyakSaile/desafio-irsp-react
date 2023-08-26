import React from 'react'
import { render } from '@testing-library/react'
import { SideMenu } from '.'

test('renders SideMenu without errors', () => {
  render(<SideMenu />)
})

test('renders user avatar image correctly', () => {
  const { getByAltText } = render(<SideMenu />)
  const avatarImage = getByAltText('')
  expect(avatarImage).toBeInTheDocument()
})

test('renders "Users" link correctly', () => {
  const { getByText } = render(<SideMenu />)
  const usersLink = getByText('Users')
  expect(usersLink).toBeInTheDocument()
})

test('renders "Logout" button correctly', () => {
  const { getByText } = render(<SideMenu />)
  const logoutButton = getByText('Logout')
  expect(logoutButton).toBeInTheDocument()
})
