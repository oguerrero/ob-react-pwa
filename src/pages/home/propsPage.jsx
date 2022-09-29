import React from 'react';
import { useLocation } from 'react-router-dom'

const PropsPage = () => {

    const location = useLocation()
    console.log(location)
    return (
        <div>
            <h1>State: {location.state.online}</h1>
        </div>
    );
}

export default PropsPage;
