import type { ISchedule } from "../types/schedule-types";

export const schedules: ISchedule[]  = [
    {
        id: 1,
        date: new Date(),
        beginTime: '08:15',
        endTime: '09:30',
        description: 'описание записи №1',
        userId: 1,
        clientId: 1
    }, 
    {   id: 2,
        date: new Date(),
        beginTime: '10:45',
        endTime: '11:30',
        description: 'описание записи №2',
        userId: 1,
        clientId: 2
    }, 
    {
        id: 3,
        date: new Date(),
        beginTime: '14:00',
        endTime: '15:00',
        description: 'описание записи №3',
        userId: 1,
        clientId: 3
    }, 
    {   id: 4,
        date: new Date(),
        beginTime: '11:30',
        endTime: '12:30',
        description: 'описание записи №4',
        userId: 1,
        clientId: 2
    }, 
]


export const getSchedulesForDate = (date: Date) => {
    return [...schedules.filter(schedule => schedule.date.toISOString().split('T')[0] === date.toISOString().split('T')[0])];
}



    