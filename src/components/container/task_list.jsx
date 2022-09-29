import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

// Import custom css
import '../../styles/task.scss'
import TaskFormik from '../pure/forms/taskFormik'

const TaskListComponent = () => {
    const defaultTask1 = new Task(
        'Example1',
        'Default description1',
        true,
        LEVELS.NORMAL
    )

    const defaultTask2 = new Task(
        'Example2',
        'Default description2',
        false,
        LEVELS.URGENT
    )

    const defaultTask3 = new Task(
        'Example3',
        'Default description3',
        true,
        LEVELS.BLOCKING
    )
    // Estado del componente
    const [tasks, setTasks] = useState([
        defaultTask1,
        defaultTask2,
        defaultTask3
    ])
    const [loading, setLoading] = useState(true)

    // Control del ciclo de vida
    useEffect(() => {
        console.log('Task state has been modified')
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => {
            console.log('Task list component is going to unmount...')
        }
}, [tasks])

    function completeTask(task) {
        console.log('>> Complete this task', task)
        const index = tasks.indexOf(task)
        const tempTask = [...tasks]
        tempTask[index].completed = !tempTask[index].completed

        // Updating state of Tasks and Task Component with new list
        setTasks(tempTask)
    }

    function deleteTask(task) {
        console.log('>> Delete this task', task)
        const index = tasks.indexOf(task)
        const tempTask = [...tasks]
        tempTask.splice(index, 1)
        setTasks(tempTask)
    }

    function addTask(task) {
        console.log('>> Add this task', task)
        const tempTask = [...tasks]
        tempTask.push(task)
        setTasks(tempTask)
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => {
                        return (
                            <TaskComponent
                                key={index}
                                task={task}
                                complete={completeTask}
                                remove={deleteTask}
                            />
                        )
                    })}
                </tbody>
            </table>
        )
    }

    let tasksTable =
        tasks.length === 0 ? (
            <div>
                <h4>No pending tasks</h4>
                <h5>Please, crate one</h5>
            </div>
        ) : (
            <Table />
        )

    const loadingStyle = {
        color: 'gray',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col col-7'>
                    <div className='card'>
                        {/* Card header (title) */}
                        <div className='card-header p-3'>
                            <h5>Your Tasks:</h5>
                        </div>
                        {/* Card body */}
                        <div
                            className='card-body'
                            data-mdb-perfect-scrollbar='true'
                            style={{ position: 'relative', height: '400px' }}>
                            {/* TODO: Add Spinner */}
                            {loading ? (
                                <p style={loadingStyle}>LOADING...</p>
                            ) : (
                                tasksTable
                            )}
                        </div>
                    </div>
                    {/* <TaskForm add={addTask} /> */}
                </div>
                <div className='col col-5'>
                    <TaskFormik add={addTask} />
                </div>
            </div>
        </div>
    )
}

export default TaskListComponent
