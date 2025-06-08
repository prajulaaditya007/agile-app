import { render, screen } from '@testing-library/react'
import BoardView from '../index'

jest.mock('@/state/api', () => ({
  useGetTasksQuery: () => ({ data: [], isLoading: false, error: null }),
  useUpdateTaskStatusMutation: () => [jest.fn()],
}))

it('renders board columns', () => {
  render(<BoardView id="1" setIsModalNewTaskOpen={() => {}} />)
  expect(screen.getByText('To Do')).toBeInTheDocument()
})
