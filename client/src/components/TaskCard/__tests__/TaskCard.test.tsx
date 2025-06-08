import { render, screen } from '@testing-library/react'
import TaskCard from '../index'

it('renders task title', () => {
  const task = { id: 1, title: 'Task', description: '', status: '', priority: '', tags: '', startDate: '', dueDate: '', author: null, assignee: null }
  render(<TaskCard task={task as any} />)
  expect(screen.getByText(/Task/)).toBeInTheDocument()
})
