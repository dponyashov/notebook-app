import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AppRoutes } from '../../consts/routes';
import ThemedButton from '../UI/ThemedButton';
import { PageCaptions } from '../../consts/pageCaptions';
import ThemedInput from '../UI/ThemedInput';
import ThemedErorText from '../UI/ThemedErorText';

import styles from '../../css/containers/div-container.module.css'
import Spacer from '../UI/Spacer';
import type { ErrorType } from '../../types/error-types';


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
    <div className={styles.divContainer}>
      <h3>{PageCaptions.REGISTRY}</h3>
      <Spacer />
      <div className={styles.divContainer}>
        <ThemedInput type="text" placeholder="введите email" value={email} onChange={e => setEmail(e.target.value)}/>
        <ThemedInput type="password" placeholder="введите пароль" value={passw} onChange={e => setPassw(e.target.value)}/>
      </div>
      <Spacer height='15px' />
      <div className={styles.divContainer}>
        <ThemedButton onClick={registrationHandle}>{AppRoutes.REGISTRATION.actionText}</ThemedButton>
        <ThemedButton onClick={loginHandle}>{AppRoutes.LOGIN.actionText}</ThemedButton>
        <Spacer height='25px' />
        {
          (errors.length > 0) && errors.map((error, index) => 
                          <ThemedErorText key={index} caption={error.caption + ': '} text={error.text}/>)          
        }
      </div>
    </div>    
  )
}

export default RegistrationPage;