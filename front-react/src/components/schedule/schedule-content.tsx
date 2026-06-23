import { CardContent, Typography } from '@mui/material';
import type { ISchedule } from '../../types/schedule-types';
import type { FC } from 'react';

interface ScheduleContentProps {
  item: ISchedule;
}

const ScheduleContent: FC<ScheduleContentProps> = ({item}) => {
  return (
    <CardContent style={{padding: '10px'}}>      
      <Typography color="textPrimary" gutterBottom>с {item.beginTime} по {item.endTime}</Typography>
      { !item.isEmpty && <Typography variant="h6">Клиент: { item.clientId }</Typography> }
      <Typography color="textSecondary">{item.description}</Typography>
    </CardContent>
  )
}

export default ScheduleContent;
