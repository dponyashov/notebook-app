import type { ISchedule } from '../../types/schedule-types';
import ScheduleItem from './schedule-item';

import { List } from '@mui/material';

interface ScheduleListProps {
    items: ISchedule[]
}

const ScheduleList: React.FC<ScheduleListProps> = ({items}) => {
    return (
            <List style={{maxHeight: '80vh', overflow: 'auto'}} >
                { !items && <h6>Нет данных для загрузки</h6> }
                { items && ( items.map((item: ISchedule) => <ScheduleItem key={item.id} item={item}/>) ) }
            </List>
    )
}

export default ScheduleList;