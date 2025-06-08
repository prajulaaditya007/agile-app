import { render, screen } from '@testing-library/react'
import TableView from '../index'

jest.mock('@/state/api', () => ({
  useGetTasksQuery: () => ({ data: [], isLoading: false, error: null }),
}))

test('shows header name', () => {
  render(<TableView id="1" setIsModalNewTaskOpen={() => {}} />)
  expect(screen.getByText('Table')).toBeInTheDocument()
})
