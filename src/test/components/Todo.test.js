import { render, screen } from '@testing-library/react'
import Todo from './Todo'

describe('Todo component is working correctly', () => {
  const todo = { id: 5, text: 'Comprar la lista', completed: true }
  render(<Todo todo={todo} />)
  const todoElement = screen.getByTestId(`todo-test-${todo.id}`)
  const checkbox = screen.getByTestId('checkbox-test')
  it('should render Todo Component', () => {
    expect(todoElement).toBeInTheDocument()
  })
  it('should have right text in Todo Component', () => {
    expect(todoElement).toHaveTextContent(todo.text)
  })
  it('should  be checked Todo Component', () => {
    expect(checkbox).toBeChecked()
  })
})
