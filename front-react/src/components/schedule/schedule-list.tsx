import type { ISchedule } from '../../types/schedule-types';
import ScheduleItem from './schedule-item';

import styles from '../../css/UI/div-list.module.css';
import CustomModal from '../UI/modal/CustomModal';

interface ScheduleListProps {
    items: ISchedule[]
}

const ScheduleList: React.FC<ScheduleListProps> = ({items, ...props}) => {

    return (
        <div className={styles.divVertList}
            {...props}>
            { !items && <h6>Нет данных для загрузки</h6> }
            { items && ( items.map((item: ISchedule) => <ScheduleItem key={item.id} item={item}/>) ) }
        </div>
    )
}

export default ScheduleList;