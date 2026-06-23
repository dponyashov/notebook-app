import { useEffect, useState } from "react";
import { useSchedule } from "../../hooks/useSchedule"
import { scheduleListWithEmpty } from "../../utils/schedule-utils";
import type { ISchedule } from "../../types/schedule-types";
import { ThemedLoader } from "../UI/ThemedLoader";
import { getSchedulesForDate } from "../../fake/fakeSchedules";
import ScheduleList from "../schedule/schedule-list";
import { PageCaptions } from "../../consts/pageCaptions";

import TemplatePage from "./TemplatePage";
import { Box, Typography } from "@mui/material";
import ThemedDatePicker from "../UI/ThemedDatePicker";
import { UiCaptions } from "../../consts/uiCaptions";
import { useUser } from "../../hooks/useUser";

const SchedulePage = () => {

    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [preperedList, setPreparedList] = useState<ISchedule[]>([]);
    const { scheduleList, loaded, setList } = useSchedule(currentDate);

    const {user} = useUser();

    useEffect(()=> {
        if (loaded) {
            setPreparedList(scheduleListWithEmpty(scheduleList, currentDate));
        }        
    }, [loaded, scheduleList]);

    const selectDateHandle = (date: string) => {
        let selectedDate = new Date();
        if( !isNaN(Date.parse(date))){
            selectedDate = new Date(date);
        }
        setCurrentDate(selectedDate);
        setList(getSchedulesForDate(selectedDate));
    }

    return (
        <TemplatePage pageCaption={PageCaptions.SCHEDULE}>
            <Box style={{display: 'flex',
                        justifyContent: 'center', 
                        alignItems: 'center',
                        gap: 150,
                        marginTop: '5px'}}
            >
                {user &&
                    <Typography variant="h6">{ user.name }</Typography>
                }
                <ThemedDatePicker style={{marginTop: '20px'}}
                    value = { currentDate.toISOString().split('T')[0] }
                    onChange = { e => selectDateHandle(e.target.value) }
                >
                    {UiCaptions.DATEPICKERS.CURRENT}
                </ThemedDatePicker>
            </Box>
            { !loaded && <ThemedLoader /> }
            { loaded && <ScheduleList items = {preperedList}/> }
        </TemplatePage>
    )
}

export default SchedulePage;