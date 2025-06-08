import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { makeStore } from '@/app/redux'
import Sidebar from '../index'

it('collapses sidebar', () => {
  const store = makeStore()
  render(
    <Provider store={store}>
      <Sidebar />
    </Provider>
  )
  const closeButtons = screen.getAllByRole('button')
  if(closeButtons.length > 0){
    fireEvent.click(closeButtons[closeButtons.length-1])
  }
  expect(store.getState().global.isSidebarCollapsed).toBe(true)
})
