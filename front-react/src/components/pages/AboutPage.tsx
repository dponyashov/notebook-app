import { Typography } from '@mui/material';
import { PageCaptions } from '../../consts/pageCaptions';
import TemplatePage from './TemplatePage';

const AboutPage = () => {
  return (
    <TemplatePage pageCaption={PageCaptions.ABOUT}>
      <Typography>тут будет какой то текст о проекте</Typography>
    </TemplatePage>
  )
}

export default AboutPage