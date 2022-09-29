import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CopyRight from '../../components/pure/CopyRight'
import MenuListItems from '../../components/pure/MenuListItems'

const DashBoard = () => {
    const navigate = useNavigate()
    const loggout = () => {
        navigate('/login', { replace: true })
    }

    return (
        <div>
            {/* <MenuListItems /> */}
            <Button variant='contained' onClick={loggout}>
                Logout
            </Button>
            <CopyRight />
        </div>
    )
}

export default DashBoard
