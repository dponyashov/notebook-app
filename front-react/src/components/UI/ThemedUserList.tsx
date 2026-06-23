import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import type { IShortUser } from '../../types/auth-types';
import type { FC } from 'react';


interface ThemedUserListProps {
    users: IShortUser[];
    onSelect: (user: IShortUser) => void;
}

const ThemedUserList: FC<ThemedUserListProps> = ({users, onSelect}) => {

    return (
        <List>
            {users &&
                users.map( user => 
                    <ListItem key={user.id} disablePadding>
                        <ListItemButton onClick={() => onSelect(user)}>
                            {/* <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon> */}
                            <ListItemText>{user.name}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                )            
            }
        </List>
    )
}

export default ThemedUserList