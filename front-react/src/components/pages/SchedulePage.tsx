import { useEffect, useState } from "react";
import { useSchedule } from "../../hooks/useSchedule"
import { scheduleListWithEmpty } from "../../utils/schedule-utils";
import type { ISchedule } from "../../types/schedule-types";
import { ThemedLoader } from "../UI/ThemedLoader";
import { getSchedulesForDate } from "../../fake/fakeSchedules";
import ScheduleList from "../schedule/schedule-list";
import ThemedInput from "../UI/ThemedInput";
import { PageCaptions } from "../../consts/pageCaptions";

import styles from '../../css/containers/div-container.module.css';
import Spacer from "../UI/Spacer";

const SchedulePage = () => {

    // const { user } = useUser();
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [preperedList, setPreparedList] = useState<ISchedule[]>([]);
    const { scheduleList, loaded, setList } = useSchedule(currentDate);

    useEffect(()=> {
        if (loaded) {
            setPreparedList(scheduleListWithEmpty(scheduleList, currentDate));
        }        
    }, [loaded, scheduleList]);

    const selectDateHandle = (date: Date) => {
        setCurrentDate(date);
        setList(getSchedulesForDate(date));
    }

    return (
        <div className={styles.divContainer}>
            <h3>{PageCaptions.SCHEDULE}</h3>
            <Spacer/>
            <div>
                <label><b>Текущая дата </b>
                    <ThemedInput type="date"
                        value = { currentDate.toISOString().split('T')[0] }
                        onChange = { e => selectDateHandle(new Date(e.target.value))}
                    />
                </label>
            </div>
            <Spacer height="30px" />         
            { !loaded && <ThemedLoader /> }
            { loaded && <ScheduleList items = {preperedList}/> }
        </div>
    )
}

export default SchedulePage;