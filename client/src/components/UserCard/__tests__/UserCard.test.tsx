import { render, screen } from '@testing-library/react'
import UserCard from '../index'

it('shows username', () => {
  const user = { id:1, username:'john', email:'a', profilePictureUrl:'', teamId:null }
  render(<UserCard user={user as any} />)
  expect(screen.getByText(/john/)).toBeInTheDocument()
})
