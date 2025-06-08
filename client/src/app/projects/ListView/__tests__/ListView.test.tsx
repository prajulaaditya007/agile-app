import { render, screen } from '@testing-library/react'
import ListView from '../index'

jest.mock('@/state/api', () => ({
  useGetTasksQuery: () => ({ data: [], isLoading: false, error: null }),
}))

test('shows header', () => {
  render(<ListView id="1" setIsModalNewTaskOpen={() => {}} />)
  expect(screen.getByText('List')).toBeInTheDocument()
})
