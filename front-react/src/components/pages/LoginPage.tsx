import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../consts/routes";
import ThemedButton from "../UI/ThemedButton";
import ThemedInput from "../UI/ThemedInput";
import ThemedErorText from "../UI/ThemedErorText";

import { PageCaptions } from "../../consts/pageCaptions";
import Spacer from "../UI/Spacer";
import type { ErrorType } from "../../types/error-types";
import TemplatePage from "./TemplatePage";
import { Box } from "@mui/material";


const LoginPage = () => {

    const [email, setEmail] = useState<string>('');
    const [passw, setPassw] = useState<string>('');
    const [errors, setErrors] = useState<ErrorType[]>([]);

    const navigate = useNavigate();

    const loginHandle = () => {

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


      //TODO тут отправляемся логиниться
      console.log(`Входим в приложение, email=${email} passw=${passw}`);
    }

  const registrationHandle = () => {
    navigate(AppRoutes.REGISTRATION.value);
  }

  return (
    <TemplatePage pageCaption={PageCaptions.LOGIN}>
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
                    marginTop: '15px',
      }}>
        <ThemedButton onClick={loginHandle}>{AppRoutes.LOGIN.actionText}</ThemedButton>
        <ThemedButton onClick={registrationHandle}>{AppRoutes.REGISTRATION.actionText}</ThemedButton>
        {
          (errors.length > 0) && errors.map((error, index) => 
                          <ThemedErorText key={index} caption={error.caption + ': '} text={error.text}/>)          
        }
      </Box>
    </TemplatePage>    
  )
}

export default LoginPage