export const timeStringToNumber = (time: string): number => {
    const timeParts = time.split(':');

    if (timeParts.length !== 2){
        return 0;
    }

    const hour = Number(timeParts[0]);
    const minut = Number(timeParts[1]);

    if ( Number.isInteger(hour) && Number.isInteger(minut)) {
        return hour * 60 + minut;
    }

    return 0;
}

export const timeNumberToString = (time: number): string => {
    if(!Number.isInteger(time)){
        return '';
    }

    const hour = Math.trunc(time / 60);
    const minut = time % 60;

    return ( hour < 10 ? '0'.concat(hour.toString()) : hour.toString() ) + ':' + ( minut < 10 ? '0'.concat(minut.toString()) : minut.toString())
}