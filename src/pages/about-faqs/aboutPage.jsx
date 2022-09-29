import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

const AboutPage = () => {
    const location = useLocation()
    const navigate = useNavigate()

    console.log('We are in route: ', location.pathname)

    return (
        <div>
            <h1>About | FAQS</h1>
            <div>
                <button onClick={() => navigate('/', { replace: true })}>
                    Go To Home
                </button>
                <button onClick={() => navigate(+1)}>Go Forward</button>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    )
}

export default AboutPage
