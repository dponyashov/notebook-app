import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import type { IShortUser } from '../../types/auth-types';
import { useContext, useState, type FC } from 'react';
import Spacer from './Spacer';
import ThemedFindText from './ThemedFindText';
import { ScheduleContext } from '../../contexts/scheduleContext';


interface ThemedUserListProps {
    users: IShortUser[];
    onSelect: (user: IShortUser | null) => void;
}

const ThemedUserList: FC<ThemedUserListProps> = ({users, onSelect}) => {

    const [filteredUsers, setFilteredUsers] = useState<IShortUser[]>(users);
    const {selectedUserId, changeScheduleUserId} = useContext(ScheduleContext);

    const filterHandle = (findText: string) => {
        let filteredList = [...users];
        if(findText && findText.trim().length > 0){
            filteredList = [...users.filter(user => user.name.trim().toUpperCase().startsWith(findText.trim().toUpperCase()))];
        }

        if (!(filteredList && filteredList.length > 0 && filteredList.filter(user => user.id === selectedUserId)[0])) {
            changeScheduleUserId(0);
            onSelect(null);
        }
        setFilteredUsers(filteredList);
    }

    return (
        <Box style={{ marginTop: '15px', marginLeft: '10px'}}>
            <ThemedFindText onChange={filterHandle} />
            <Spacer />
            <List style={{
                    maxHeight: '75vh',
                    overflow: 'auto',
                }} >
                {filteredUsers &&
                    filteredUsers.map( user => 
                        <ListItem key={user.id} disablePadding>
                            <ListItemButton onClick={() => onSelect(user)} selected={user.id === selectedUserId}>
                                {/* <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon> */}
                                <ListItemText>{user.name}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    )            
                }
            </List>
        </Box>
    )
}

export default ThemedUserList