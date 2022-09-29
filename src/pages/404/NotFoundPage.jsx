import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <button onClick={() => navigate('/', { replace: true })}>
                Go To Home
            </button>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

export default NotFoundPage
