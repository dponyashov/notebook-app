import { useState } from "react";
import { getSchedulesForDate } from "../fake/fakeSchedules"
import type { ISchedule } from "../types/schedule-types";

export const useSchedule = (date: Date) => {
    const [scheduleList, setList] = useState<ISchedule[]>(getSchedulesForDate(date));
    const loaded = true;

    return { scheduleList, loaded, setList };
}