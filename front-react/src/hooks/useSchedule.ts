import { useState } from "react";
import { getSchedulesForDate, getSchedulesForDateAndUserId } from "../fake/fakeSchedules"
import type { ISchedule } from "../types/schedule-types";

export const useSchedule = (date: Date) => {
    const [scheduleList, setList] = useState<ISchedule[]>(getSchedulesForDate(date));
    const loaded = true;

    return { scheduleList, loaded, setList };
}

export const useScheduleForUser = (date: Date, userId: number) => {
    let loaded = false;
    const [scheduleList, setList] = useState<ISchedule[]>(getSchedulesForDateAndUserId(date, userId));
    loaded = true;

    return { scheduleList, loaded, setList };
}