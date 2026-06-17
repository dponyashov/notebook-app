import { useEffect, useState, type FC } from 'react'
import type { ISchedule } from '../../types/schedule-types';
import type { ErrorType } from '../../types/error-types';
import Spacer from '../UI/Spacer';
import ThemedErorText from '../UI/ThemedErorText';
import ThemedButton from '../UI/ThemedButton';
import { UiCaptions } from '../../consts/uiCaptions';
import ThemedInput from '../UI/ThemedInput';

import styles from '../../css/containers/div-container.module.css'
import ThemedTextArea from '../UI/ThemedTextArea';
import { useUser } from '../../hooks/useUser';
import { timeNumberToString, timeStringToNumber } from '../../utils/time-util';
import ThemedSelect from '../UI/ThemedSelect';
import { fakeClientList, fakeUserList } from '../../fake/fakeSelectOptions';
import type { OptionType } from '../../types/ui-types';
import { AppConfig } from '../../consts/AppConfig';

interface ScheduleFormProps {
    caption: string;
    schedule: ISchedule;
    closeForm: () => void;
}

const ScheduleForm: FC<ScheduleFormProps> = ({caption, schedule, closeForm, ...props}) => {

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

    const saveHandle = () => {
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
    }

    useEffect(
        ()=>{
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
        }, []
    );

    return (
        <div className={styles.divContainer} {...props}>
            <h4>{caption}{schedule.isEmpty ? ' - Добавление' : ' - Редактирование'}</h4>
            <Spacer height='15px'/>
            <h5>Запись на <b>{selectedDate.toISOString().split('T')[0]}</b></h5>
            <Spacer height='10px'/>

            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <span>начало <ThemedInput type='time'value={start} onChange={e => setStart(e.target.value)}/></span>
                <span>окончание <ThemedInput type='time'value={finish} onChange={e => setFinish(e.target.value)}/></span>
            </div>             
            <Spacer />

            <ThemedSelect 
                value={userId} 
                options={userOptions} 
                onChange={e => setUserId(Number( e ))}
                style={{width: '100%'}}
                // readOnly={true}
            >
                Выберите пользователя
            </ThemedSelect>
            <Spacer height='10px' />

            <ThemedSelect 
                value={clientId} 
                options={clientOptions} 
                onChange={e => setClientId(Number( e ))}
                style={{width: '100%'}}
            >
                Выберите клиента
            </ThemedSelect>
            <Spacer />

            <ThemedTextArea
                placeholder='введите описание'
                value={description} 
                onChange={e => setDescription(e.target.value)}
                rows='3'
                style={{width: '100%'}}
            />            
            <Spacer />

            <ThemedButton onClick={saveHandle}>{UiCaptions.BUTTONS.SAVE}</ThemedButton>
            <Spacer height='10px' />

            {errors && errors.length > 0 && errors.map((error, index) => 
                            <ThemedErorText key={index} caption={error.caption + ': '} text={error.text}/>)
            }
        </div>
    )
}


export default ScheduleForm;
