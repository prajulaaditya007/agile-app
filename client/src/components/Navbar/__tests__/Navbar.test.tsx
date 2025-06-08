import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { makeStore } from '@/app/redux'
import Navbar from '../index'

it('toggles dark mode', () => {
  const store = makeStore()
  render(
    <Provider store={store}>
      <Navbar />
    </Provider>
  )
  const toggle = screen.getAllByRole('button')[0]
  fireEvent.click(toggle)
  expect(store.getState().global.isDarkMode).toBe(true)
})
