import type { ISchedule } from '../../types/schedule-types';
import ScheduleContent from './schedule-content';

import styles from '../../css/UI/card.module.css';
import CustomModal from '../UI/modal/CustomModal';
import ScheduleForm from '../forms/ScheduleForm';
import { useState } from 'react';

interface ScheduleItemProps {
    item: ISchedule
}

 const ScheduleItem:React.FC<ScheduleItemProps> = ({item, ...props}) => {

    const [showModal, setShowModal] = useState<boolean>(false);

    const thisStyles = [styles.cardContainer, (item.isEmpty ? styles.cardItemEmpty : styles.cardItemFill)];

    const clickHandle = () => {
        setShowModal(true);
    }

    return (
        <div className={ thisStyles.join(' ')}
            {...props}
            onClick={clickHandle}
        >
            {
                showModal && 
                <CustomModal visible={showModal} setVisible={setShowModal}>
                    <ScheduleForm caption='Запись расписания' schedule={item} closeForm={ () => setShowModal(false) } />
                </CustomModal>
            }
            
            <ScheduleContent {...props}>
                <span>с {item.beginTime} по {item.endTime}</span>
                { !item.isEmpty && <span>Клиент: { item.clientId }</span> }
                { !item.isEmpty && <span>Пользователь: { item.userId }</span> }
                <p>{item.description}</p>
            </ScheduleContent>
        </div>
    )
}

export default ScheduleItem;
