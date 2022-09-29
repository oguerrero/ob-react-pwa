import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import LoginFormik from '../../components/pure/forms/loginFormik'

const LoginPage = () => {
    let logged = localStorage.getItem('credentials')

    useEffect(() => {
        logged = localStorage.getItem('credentials')
    }, [])

    if (logged) {
        console.log('You are already logged in')
        alert('You are already logged in')
        return <Navigate replace to='/' />
    }

    return (
        <div>
            <LoginFormik />
        </div>
    )
}

export default LoginPage
