import { render, screen } from '@testing-library/react'
import Modal from '../index'

it('renders children when open', () => {
  render(
    <Modal isOpen={true} onClose={() => {}} name="Test Modal">
      <div>modal content</div>
    </Modal>
  )
  expect(screen.getByText('modal content')).toBeInTheDocument()
})
