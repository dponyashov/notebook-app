export class DateTimeUtils {
    static stringIsTime(strValue: string): boolean {
        // const timeRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/; //HH:MM:SS
        const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; //HH:MM
        const isValid = timeRegex.test(strValue);
        return isValid;
    }

    static stringIsDate(strValue: string): boolean {
        const timeRegex = /^(\d{4})-(\d{2})-(\d{2})$/; //YYYY-MM-DD
        const isValid = timeRegex.test(strValue);
        return isValid;
    }

    static stringTimeToNumber(strValue: string): number {
        const time = strValue.split(':');
        const numberTime = Number(time[0] ? time[0] : 0) * 60 * 60 + 
                            Number(time[1] ? time[1] : 0) * 60 + 
                            Number(time[2] ? time[2] : 0);

        // console.log('TimeUtils.stringTimeToNumber()', strValue, numberTime);

        return numberTime;
    }
}