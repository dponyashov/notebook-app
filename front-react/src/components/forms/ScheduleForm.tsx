import { useEffect, useState, type FC } from 'react'
import type { ISchedule } from '../../types/schedule-types';
import type { ErrorType } from '../../types/error-types';
import Spacer from '../UI/Spacer';
import ThemedErorText from '../UI/ThemedErorText';
import ThemedButton from '../UI/ThemedButton';
import { UiCaptions } from '../../consts/uiCaptions';

import ThemedTextArea from '../UI/ThemedTextArea';
import { useUser } from '../../hooks/useUser';
import { timeNumberToString, timeStringToNumber } from '../../utils/time-util';
import ThemedSelect from '../UI/ThemedSelect';
import { fakeClientList, fakeUserList } from '../../fake/fakeSelectOptions';
import type { OptionType } from '../../types/ui-types';
import { AppConfig } from '../../consts/appConfig';
import { Box, Typography } from '@mui/material';
import ThemedTimePicker from '../UI/ThemedTimePicker';
import { FormCaptions } from '../../consts/formCaption';

interface ScheduleFormProps {
    schedule: ISchedule;
    closeForm: () => void;
}

const ScheduleForm: FC<ScheduleFormProps> = ({schedule, closeForm}) => {

    const [selectedDate] = useState<Date>((schedule ? schedule.date : new Date()));
    const [start, setStart] = useState<string>((schedule ? schedule.beginTime : timeNumberToString(AppConfig.startTime)));
    const [finish, setFinish] = useState<string>((schedule ? schedule.endTime : timeNumberToString(AppConfig.endTime)));
    const [description, setDescription] = useState<string>((schedule ? (schedule.isEmpty ? '' : schedule.description) : ''));
    const [userId, setUserId] = useState<number>((schedule ? (schedule.isEmpty ? 0 : schedule.userId) : 0));
    const [clientId, setClientId] = useState<number>((schedule ? (schedule.isEmpty ? 0 : schedule.clientId) : 0));

    const [clientOptions, setClientOptions] = useState<OptionType[]>([]);
    const [userOptions, setUserOptions] = useState<OptionType[]>([]);

    const [errors, setErrors] = useState<ErrorType[]>([]);

    const { user } = useUser();

    const checkUserRoles = (roleName: string): boolean => {
        if (user && user.roles) {
            return user.roles.filter(role => role.name.trim().toUpperCase() === roleName.trim().toUpperCase()).length > 0;
        }
        return false
    }
    
    const saveHandle = (e) => {
        const errorList = [];

        if(timeStringToNumber(start) >= timeStringToNumber(finish)){
            errorList.push({caption: 'Время', text: 'Время начала должно быть меньше времени окончания'});
        }

        if(!userId || userId < 1){
            errorList.push({caption: 'Пользователь', text: 'Пользователь не выбран'});
        }

        if(!clientId || clientId < 1){
            errorList.push({caption: 'Клиент', text: 'Клиент не выбран'});
        }

        if( description.length < 10){
            errorList.push({caption: 'Описание', text: 'Описание должно быть больше 9 символов'});
        }

        setErrors(errorList);

        if(errorList && errorList.length > 0) {
            return;
        }


        //TODO тут отправляемся сохранять запись
        console.log(`Сохраняем запись\ndescription='${description}'\nstart=='${start}', finish='${finish}'\nuserId='${userId}', clientId='${clientId}'`);

        closeForm();
        e.stopPropagation();
    }

    useEffect( ()=> {
        const clientOptions: OptionType[] = fakeClientList.map(
            client => {
                const option: OptionType = {value: client.id, name: client.name}
                return option;
            }
        );
        setClientOptions(clientOptions);

        const userOptions: OptionType[] = fakeUserList.map(
            user => {
                const option: OptionType = {value: user.id, name: user.name}
                return option;
            }
        );
        setUserOptions(userOptions);

        if (user && userId <= 0) {
            setUserId(user.id);
        }
    }, []);

    return (
        <Box style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px'}}>
            <Typography variant='h5'>
                {FormCaptions.SCHEDULEFORM.caption}
                {schedule.isEmpty 
                    ? FormCaptions.SCHEDULEFORM.postfix.ADD 
                    : FormCaptions.SCHEDULEFORM.postfix.EDIT
                }
            </Typography>
            <Typography variant='h6'>Запись на {selectedDate.toISOString().split('T')[0]}</Typography>
            <Spacer/>
            <Box style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <ThemedTimePicker value={start} onChange={e => setStart(e.target.value)}>
                    {UiCaptions.TIMEPIKERS.START}
                </ThemedTimePicker>
                <ThemedTimePicker value={finish} onChange={e => setFinish(e.target.value)}>
                    {UiCaptions.TIMEPIKERS.FINISH}
                </ThemedTimePicker>
            </Box>
            <Spacer height='10px'/>
            <ThemedSelect 
                value={userId} 
                options={userOptions} 
                onChange={e => setUserId(Number( e ))}
                fullWidth
                readOnly={!checkUserRoles('ADMINISTRATOR')}
            >
                {UiCaptions.SELECT.USER}
            </ThemedSelect>
            <Spacer />
            <ThemedSelect 
                value={clientId} 
                options={clientOptions} 
                onChange={e => setClientId(Number( e ))}
                fullWidth
                // readOnly={true}
            >
                {UiCaptions.SELECT.CLIENT}
            </ThemedSelect>
            <Spacer height='10px'/>
            <ThemedTextArea
                value={description} 
                onChange={e => setDescription(e.target.value)}
            >
                Введите описание
            </ThemedTextArea>
            <Spacer height='15px'/>
            <ThemedButton onClick={saveHandle}>{UiCaptions.BUTTONS.SAVE}</ThemedButton>
            <Spacer height='10px' />
            {errors && errors.length > 0 && errors.map((error, index) => 
                <ThemedErorText key={index} caption={error.caption + ': '} text={error.text}/>)
            }
        </Box>
    )
}


export default ScheduleForm;
