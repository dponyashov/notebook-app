import type { ISchedule } from "../types/schedule-types";
import { timeNumberToString, timeStringToNumber } from "./time-util";

let emptyScheduleId = 0;

export const scheduleListWithEmpty = (list: ISchedule[], date: Date) => {

    const startTime = '00:00';
    const finishTime = '23:59';
    const resultList: ISchedule[] = [];

    if (!list || list.length < 1) {
        addEmptySchedule(resultList, date, startTime, finishTime);
        return [...resultList];
    }

    let currentTime = timeStringToNumber(startTime);

    const sortedList = list.sort((a, b) => timeStringToNumber(a.beginTime) - timeStringToNumber(b.beginTime) );

    sortedList.forEach(record => {
        if (timeStringToNumber(record.beginTime) > currentTime) {
            addEmptySchedule(resultList, date, timeNumberToString(currentTime), record.beginTime);
        }
        addSchedule(resultList, record);
        currentTime = timeStringToNumber(record.endTime);
    })

    if ( currentTime < timeStringToNumber(finishTime)) {
        addEmptySchedule(resultList, date, timeNumberToString(currentTime), finishTime);
    }

    return [...resultList];
}

function addEmptySchedule(resultList: ISchedule[], date: Date, startTime: string, finishTime: string) {
    const record: ISchedule = {
        id: 'empty_' + ++emptyScheduleId,
        date: date,
        beginTime: startTime,
        endTime: finishTime,
        description: 'Свободное время',
        userId: 0,
        clientId: 0,
        isEmpty: true
    }

    resultList.push(record);
}

function addSchedule(resultList: ISchedule[], schedule: ISchedule) {
    resultList.push({...schedule, isEmpty: false});
}

