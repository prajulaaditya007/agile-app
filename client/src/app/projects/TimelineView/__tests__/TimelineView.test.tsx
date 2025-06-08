import { render, screen } from '@testing-library/react'
import TimelineView from '../index'

jest.mock('@/state/api', () => ({
  useGetTasksQuery: () => ({ data: [], isLoading: false, error: null }),
}))

test('renders button', () => {
  render(<TimelineView id="1" setIsModalNewTaskOpen={() => {}} />)
  expect(screen.getByRole('button', { name: /add new task/i })).toBeInTheDocument()
})
