export interface ISchedule {
    id: number | string;
    date: Date;
    beginTime: string;
    endTime: string;
    description: string;
    userId: number;
    clientId: number;
    isEmpty?: boolean;
}