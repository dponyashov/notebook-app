import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AppRoutes } from '../../consts/routes';
import ThemedButton from '../UI/ThemedButton';
import { PageCaptions } from '../../consts/pageCaptions';
import ThemedInput from '../UI/ThemedInput';
import ThemedErorText from '../UI/ThemedErorText';

import Spacer from '../UI/Spacer';
import type { ErrorType } from '../../types/error-types';
import TemplatePage from './TemplatePage';
import { Box } from '@mui/material';


const RegistrationPage = () => {

  const [email, setEmail] = useState<string>('');
  const [passw, setPassw] = useState<string>('');
  const [errors, setErrors] = useState<ErrorType[]>([]);

  const navigate = useNavigate();

  const registrationHandle = () => {
      const errorList = [];
        
      if( email.length < 10){
        errorList.push({caption: 'Емейл', text: 'Неверный email'});
      }
      if( passw.length < 3){
        errorList.push({caption: 'Пароль', text: 'Должен быть 3 и больше символов'});
      }
      setErrors(errorList);
      if(errorList && errorList.length > 0) {
        return;
      }


      //TODO тут отправляемся регистрироваться
      console.log(`Регистрируемся в приложение, email=${email} passw=${passw}`);
  }

  const loginHandle = () => {
    navigate(AppRoutes.LOGIN.value);
  }

  return (
    <TemplatePage pageCaption={PageCaptions.REGISTRY}>
      <Box style={{display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    alignItems: 'center',
                    gap: '10px',
                    marginTop: '15px'
      }}>
        <ThemedInput type="text" placeholder="введите email" value={email} onChange={e => setEmail(e.target.value)}/>
        <ThemedInput type="password" placeholder="введите пароль" value={passw} onChange={e => setPassw(e.target.value)}/>
      </Box>
      <Box style={{display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    alignItems: 'center',
                    gap: '10px',
                    marginTop: '15px'
      }}>
        <ThemedButton onClick={registrationHandle}>{AppRoutes.REGISTRATION.actionText}</ThemedButton>
        <ThemedButton onClick={loginHandle}>{AppRoutes.LOGIN.actionText}</ThemedButton>
        <Spacer height='25px' />
        {
          (errors.length > 0) && errors.map((error, index) => 
                          <ThemedErorText key={index} caption={error.caption + ': '} text={error.text}/>)          
        }
      </Box>
    </TemplatePage>    
  )
}

export default RegistrationPage;