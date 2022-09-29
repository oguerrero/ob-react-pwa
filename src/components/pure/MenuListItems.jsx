import { Home, Settings, Task } from '@mui/icons-material'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return <Home />
        case 'SETTINGS':
            return <Settings />
        case 'TASKS':
            return <Task />
        default:
            break
    }
}

const MenuListItems = ({ list }) => {
    const navigate = useNavigate()

    return (
        <List>
            {list.map(({ text, path, icon }, index) => {
                return (
                    <ListItem
                        key={index}
                        button
                        onClick={() => navigate(path, { replace: true })}>
                        <ListItemIcon>{getIcon(icon)}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                )
            })}
        </List>
    )
}

export default MenuListItems
