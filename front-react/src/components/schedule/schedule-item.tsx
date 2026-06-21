import type { ISchedule } from '../../types/schedule-types';

import CustomModal from '../UI/modal/CustomModal';
import ScheduleForm from '../forms/ScheduleForm';
import { useState } from 'react';
import { Card, useTheme } from '@mui/material';
import ScheduleContent from './schedule-content';

interface ScheduleItemProps {
    item: ISchedule
}

 const ScheduleItem:React.FC<ScheduleItemProps> = ({item}) => {

    const [showModal, setShowModal] = useState<boolean>(false);

    const theme = useTheme();

    const clickHandle = () => {
        setShowModal(true);
    }

    return (
            <Card onClick={clickHandle} 
                style={{ 
                    backgroundColor: (item.isEmpty ? theme.palette.emptyCard.main : theme.palette.fillCard.main), 
                    marginTop: '2px' 
                }}
            >
                {
                    showModal && 
                    <CustomModal visible={showModal} setVisible={setShowModal}>
                        <ScheduleForm caption='Запись расписания' schedule={item} closeForm={ () => setShowModal(false) } />
                    </CustomModal>
                }
                <ScheduleContent item={item} />
            </Card>
    )
}

export default ScheduleItem;
