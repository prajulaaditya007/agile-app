import { render, screen } from '@testing-library/react'
import ModalNewTask from '../index'

it('renders task form when open', () => {
  render(
    <ModalNewTask isOpen={true} onClose={() => {}} />
  )
  expect(screen.getByPlaceholderText('Title')).toBeInTheDocument()
})
