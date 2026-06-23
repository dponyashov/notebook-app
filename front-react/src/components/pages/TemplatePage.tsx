import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material"
import { AppConfig } from "../../consts/appConfig"
import { useUser } from "../../hooks/useUser"
import ThemedButton from "../UI/ThemedButton"
import { UiCaptions } from "../../consts/uiCaptions"
import { useNavigate } from "react-router-dom"
import { AppRoutes } from "../../consts/routes"

const TemplatePage = ({children, pageCaption=''}) => {
    const {user} = useUser();

    const navigate = useNavigate();

    const entryHandle = () => {
        navigate(AppRoutes.LOGIN.value);
    }

    const exitHandle = () => {
        console.log('Кнопка выхода в тулбаре')
        //TODO тут надо делать логаут
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <AppBar position="static">
                <Toolbar style={{display: 'flex', justifyContent:'space-between'}}>
                    <Box style={{display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        width: '50%',
                        gap: '10px'
                    }}>
                        <Typography variant='h4'>{AppConfig.appCaption}</Typography>
                        <Typography variant='h5'>{pageCaption}</Typography>  
                    </Box>
                    <Box>
                        {user && 
                            <Box style={{display: 'flex', 
                                    justifyContent: 'center', 
                                    alignItems: 'center', 
                                    gap: '10px'
                                }}>
                                <Typography variant='h6'>{user.name}</Typography>
                                <ThemedButton onClick={exitHandle} variant="contained"> 
                                    {UiCaptions.BUTTONS.EXIT}
                                </ThemedButton>
                            </Box>}                 
                        {!user && 
                            <ThemedButton onClick={entryHandle} variant="contained">
                                {UiCaptions.BUTTONS.ENTRY}
                            </ThemedButton>
                        }
                    </Box>                           
                </Toolbar>
            </AppBar>
            <Grid container
                direction='column'
                spacing = {1}
                style={{maxHeight: '87vh'}}
            >
                {children}
            </Grid>
            <Box style={{display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        marginTop: 'auto'}}
            >
                <Typography color="primary">&copy; Д. В. Поняшов, 2026 - {(new Date()).getFullYear()}</Typography>
            </Box>
        </Box>
    )
}

export default TemplatePage