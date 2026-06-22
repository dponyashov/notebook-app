import { CardContent, Typography } from '@mui/material';
import type { ISchedule } from '../../types/schedule-types';
import type { FC } from 'react';
import { useUser } from '../../hooks/useUser';

interface ScheduleContentProps {
  item: ISchedule;
}

const ScheduleContent: FC<ScheduleContentProps> = ({item}) => {

  const {user} = useUser();

  return (
    <CardContent style={{padding: '10px'}}>
      <Typography variant="h6" component="h6">{ user.name }</Typography>
      <Typography color="textPrimary" gutterBottom>с {item.beginTime} по {item.endTime}</Typography>
      { !item.isEmpty && <Typography variant="h5">Клиент: { item.clientId }</Typography> }
      {/* { !item.isEmpty && <Typography variant="h6" component="h6">Пользователь: { item.userId }</Typography> } */}
      <Typography color="textSecondary">{item.description}</Typography>
    </CardContent>
  )
}

export default ScheduleContent;
