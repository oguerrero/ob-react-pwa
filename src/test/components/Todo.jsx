import React from 'react'

const Todo = ({ todo }) => {
  const { id, text, completed } = todo

  return (
    <div data-testid={`todo-test-${id}`}>
      <label>
        <input
          type='checkbox'
          checked={completed}
          data-testid='checkbox-test'
        />
        {text}
      </label>
    </div>
  )
}

export default Todo
