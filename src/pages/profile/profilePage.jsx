import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ProfilePage = () => {
    const navigate = useNavigate()
    let logged = localStorage.getItem('credentials')

    useEffect(() => {
        logged = localStorage.getItem('credentials')
    },[])

    if (!logged) {
        console.log('You must be logged in')
        alert('You must be logged in')
        return(<Navigate replace to='/login' />)
    }

    return (
        <div>
            <h1>Your profile</h1>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <button onClick={() => navigate('/tasks')}>Go Tasks</button>
        </div>
    )
}

export default ProfilePage
