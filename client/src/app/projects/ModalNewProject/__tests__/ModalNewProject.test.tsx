import { render, screen } from '@testing-library/react'
import ModalNewProject from '../index'

it('renders project form when open', () => {
  render(
    <ModalNewProject isOpen={true} onClose={() => {}} />
  )
  expect(screen.getByPlaceholderText('Project Name')).toBeInTheDocument()
})
