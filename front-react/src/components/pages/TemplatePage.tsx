import { AppBar, Box, Container, Grid, Toolbar, Typography } from "@mui/material"
import { AppConfig } from "../../consts/AppConfig"
import { Margin } from "@mui/icons-material"

const TemplatePage = ({children, pageCaption=''}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <AppBar position="static">
            <Toolbar>
                <Box style={{display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    gap: '25px'
                }}>
                    <Typography variant='h4'>{AppConfig.appCaption}</Typography>
                    <Typography variant='h5'>{pageCaption}</Typography>  
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