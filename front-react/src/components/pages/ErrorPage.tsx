import { Box } from "@mui/material";
import { PageCaptions } from "../../consts/pageCaptions";
import ThemedErorText from "../UI/ThemedErorText";
import TemplatePage from "./TemplatePage";

const ErrorPage = ({children}) => {
  return (
    <TemplatePage pageCaption={PageCaptions.ERROR}>
      <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <ThemedErorText caption='Ошибка' text={children}/>
      </Box>
    </TemplatePage>
  )
}

export default ErrorPage;
