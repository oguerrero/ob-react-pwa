import './App.css'
import Todo from './test/components/Todo'

function App() {
  const todosList = {
    id: 1,
    text: 'Primer tarea',
    completed: false
  }
  return (
    <div className='App'>
      <Todo todo={todosList} />
      {/* <NotificationManager />
            <AxiosCRUDExample /> */}

      {/* PROYECTO FINAL */}
      {/* <TaskListComponent />  */}
    </div>
  )
}

export default App
