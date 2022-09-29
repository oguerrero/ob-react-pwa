import React from 'react'
import { useParams } from 'react-router-dom'

const TaskDetailPage = () => {

    const taskList = [
        {
            id: 1,
            name: 'asdasd',
            description: '1asdasd'
        },
        {
            id: 2,
            name: '2',
            description: '2'
        },
        {
            id: 3,
            name: '3',
            description: '3'
        }
    ]

    function getTask(id) {
        return taskList.find(
          (task) => task.id === id
        );
      }

    let params = useParams();

    const task = getTask(parseInt(params.id, 10))
    return (
        <div>
            <h1>Task detail {params.id}</h1>
            <h2>{task.name}</h2>
            <h2>{task.description}</h2>
        </div>
    )
}

export default TaskDetailPage
