import { Box, Typography } from '@mui/material';
import { PageCaptions } from '../../consts/pageCaptions';
import TemplatePage from './TemplatePage';

const AboutPage = () => {
  return (
    <TemplatePage pageCaption={PageCaptions.ABOUT}>
      <Box style={{
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
                }}>
          <Typography variant='h5'>тут будет какой то текст о проекте</Typography>
        </Box>      
    </TemplatePage>
  )
}

export default AboutPage