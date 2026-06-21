import { PageCaptions } from "../../consts/pageCaptions";
import ThemedErorText from "../UI/ThemedErorText";
import TemplatePage from "./TemplatePage";

const ErrorPage = ({children}) => {
  return (
    <TemplatePage pageCaption={PageCaptions.ERROR}>
      <ThemedErorText caption='Ошибка' text={children}/>
    </TemplatePage>    
  )
}

export default ErrorPage;
