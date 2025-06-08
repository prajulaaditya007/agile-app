import { render, screen } from '@testing-library/react'
import ProjectCard from '../index'

it('renders project name', () => {
  const project = { id: 1, name: 'Test', description: '', startDate: '', endDate: '' }
  render(<ProjectCard project={project as any} />)
  expect(screen.getByText(/Test/)).toBeInTheDocument()
})
