import { Box, Typography } from "@mui/material"
import ThemedDatePicker from "../UI/ThemedDatePicker"
import { UiCaptions } from "../../consts/uiCaptions"
import { ThemedLoader } from "../UI/ThemedLoader"
import ScheduleList from "../schedule/schedule-list"
import { useContext, useEffect, useState, type FC } from "react"
import type { ISchedule } from "../../types/schedule-types"
import { scheduleListWithEmpty } from "../../utils/schedule-utils"
import { getSchedulesForDateAndUserId } from "../../fake/fakeSchedules"
import type { IShortUser } from "../../types/auth-types"
import { ScheduleContext } from "../../contexts/scheduleContext"


interface ScheduleListFormProps {
    user: IShortUser;
}

const ScheduleListForm: FC<ScheduleListFormProps> = ({user}) => {

    const {changeScheduleUserId} = useContext(ScheduleContext);

    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [preperedList, setPreparedList] = useState<ISchedule[]>([]);

    useEffect(()=> {
        changeScheduleUserId(user.id);
        const scheduleList = getSchedulesForDateAndUserId(currentDate, user.id);
        if (scheduleList) {
            setPreparedList(scheduleListWithEmpty(scheduleList, currentDate));
        }        
        }, [user, currentDate]
    );

    const selectDateHandle = (date: string) => {
        let selectedDate = new Date();
        if ( !isNaN(Date.parse(date))) {
            selectedDate = new Date(date);
        }
        setCurrentDate(selectedDate);
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Box sx={{ display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center' , 
                        width: '70vh', 
                        // gap: 150, 
                        marginTop: '5px' 
                    }}
                    // style={{display: 'flex',
                    //         justifyContent: 'center', 
                    //         alignItems: 'center',
                    //         // maxWidth: '80vh',
                    //         gap: 150,
                    //         marginTop: '5px'}}
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
            </Box>
            { !preperedList && <ThemedLoader /> }
            { preperedList && <ScheduleList items = {preperedList} /> }
        </>
    )
}

export default ScheduleListForm