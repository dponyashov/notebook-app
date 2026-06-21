import { useEffect, useState } from "react";
import { useSchedule } from "../../hooks/useSchedule"
import { scheduleListWithEmpty } from "../../utils/schedule-utils";
import type { ISchedule } from "../../types/schedule-types";
import { ThemedLoader } from "../UI/ThemedLoader";
import { getSchedulesForDate } from "../../fake/fakeSchedules";
import ScheduleList from "../schedule/schedule-list";
import ThemedInput from "../UI/ThemedInput";
import { PageCaptions } from "../../consts/pageCaptions";

import TemplatePage from "./TemplatePage";
import { Box } from "@mui/material";

const SchedulePage = () => {

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
        <TemplatePage pageCaption={PageCaptions.SCHEDULE}>
            <Box style={{display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        gap: 2,
                        marginTop: '5px'}}
            >
                <label>
                    <b>Текущая дата </b>
                </label>
                <ThemedInput type="date"
                    value = { currentDate.toISOString().split('T')[0] }
                    onChange = { e => selectDateHandle(new Date(e.target.value))}
                />
            </Box>
            { !loaded && <ThemedLoader /> }
            { loaded && <ScheduleList items = {preperedList}/> }
        </TemplatePage>
    )
}

export default SchedulePage;