import type { ISchedule } from '../../types/schedule-types';
import ScheduleItem from './schedule-item';

import { Box, List } from '@mui/material';

interface ScheduleListProps {
    items: ISchedule[]
}

const ScheduleList: React.FC<ScheduleListProps> = ({items}) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <List style={{
                maxHeight: '75vh',
                minWidth: '80vh',
                overflow: 'auto',
            }} >
                { !items && <h6>Нет данных для загрузки</h6> }
                { items && ( items.map((item: ISchedule) => <ScheduleItem key={item.id} item={item}/>) ) }
            </List>
        </Box>
    )
}

export default ScheduleList;