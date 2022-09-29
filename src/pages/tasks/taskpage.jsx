import React from 'react'
import { Link } from 'react-router-dom'
import TaskListComponent from '../../components/container/task_list'

const Taskpage = () => {
    return (
        <div className='my-2'>
            <Link to={`/task/${1}`} key={1}>
                Id 1
            </Link>
            <TaskListComponent />
        </div>
    )
}

export default Taskpage
