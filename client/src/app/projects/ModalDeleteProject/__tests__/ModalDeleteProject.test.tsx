import { render, screen } from '@testing-library/react'
import ModalDeleteProject from '../index'

it('shows confirmation text', () => {
  render(
    <ModalDeleteProject isOpen={true} onClose={() => {}} />
  )
  expect(screen.getByText(/delete this project/i)).toBeInTheDocument()
})
