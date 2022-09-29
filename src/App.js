import './App.css'
import AxiosCRUDExample from './components/pure/axiosCRUDExample'
import NotificationManager from './components/pure/NotificationManager'

function App() {
    return (
        <div className='App'>
            <NotificationManager />
            <AxiosCRUDExample />

            {/* PROYECTO FINAL */}
            {/* <TaskListComponent />  */}
        </div>
    )
}

export default App
