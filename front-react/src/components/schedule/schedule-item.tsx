import type { ISchedule } from '../../types/schedule-types';

import CustomModal from '../UI/CustomModal';
import ScheduleForm from '../forms/ScheduleForm';
import { useState } from 'react';
import { Card, ListItem, useTheme } from '@mui/material';
import ScheduleContent from './schedule-content';

interface ScheduleItemProps {    
    item: ISchedule;
}

 const ScheduleItem:React.FC<ScheduleItemProps> = ({item}) => {

    const [openModal, setOpenModal] = useState<boolean>(false);

    const theme = useTheme();

    const openHandle = () => {
        setOpenModal(true);
    }

    const closeHandle = () => {
        setOpenModal(false);
    }

    return (
        <ListItem style={{alignItems: "center", marginBottom: '3px'}}>
            <Card onClick={openHandle} 
                style={{ 
                    backgroundColor: (item.isEmpty ? theme.palette.emptyCard.main : theme.palette.fillCard.main),
                    minWidth: '75vh',
                }}
            >
                {
                    openModal &&
                    <CustomModal open={openModal} onClose={closeHandle}>
                        <ScheduleForm schedule={item} closeForm={ closeHandle } />
                    </CustomModal>
                }
                <ScheduleContent item={item} />
            </Card>
        </ListItem>
    )
}

export default ScheduleItem;
