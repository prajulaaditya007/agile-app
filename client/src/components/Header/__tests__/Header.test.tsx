import { render, screen } from '@testing-library/react'
import Header from '../index'

it('shows provided name', () => {
  render(<Header name="My Header" />)
  expect(screen.getByText('My Header')).toBeInTheDocument()
})
