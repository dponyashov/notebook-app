import { Box } from "@mui/material"
import { PageCaptions } from "../../consts/pageCaptions"
import { ThemedLoader } from "../UI/ThemedLoader"
import TemplatePage from "./TemplatePage"

const LoaderPage = () => {
  return (
    <TemplatePage pageCaption={PageCaptions.LOAD}>
         <Box style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
            }}>
            <ThemedLoader />
        </Box>
    </TemplatePage>
  )
}

export default LoaderPage