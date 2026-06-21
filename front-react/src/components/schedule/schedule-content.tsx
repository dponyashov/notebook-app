import { CardContent, Typography } from '@mui/material';
import type { ISchedule } from '../../types/schedule-types';
import type { FC } from 'react';

interface ScheduleContentProps {
  item: ISchedule;
}

const ScheduleContent: FC<ScheduleContentProps> = ({item}) => {
  return (
    <CardContent>
      <Typography color="textPrimary" gutterBottom>с {item.beginTime} по {item.endTime}</Typography>
      { !item.isEmpty && <Typography variant="h5" component="h2">Клиент: { item.clientId }</Typography> }
      { !item.isEmpty && <Typography variant="h5" component="h2">Пользователь: { item.userId }</Typography> }
      <Typography color="textSecondary">{item.description}</Typography>
    </CardContent>
  )
}

export default ScheduleContent;
