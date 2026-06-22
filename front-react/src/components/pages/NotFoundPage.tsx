import { Box, Typography } from "@mui/material"
import TemplatePage from "./TemplatePage"

export default function NotFoundPage() {
  return (
    <TemplatePage>
       <Box style={{
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
            }}>
        <Typography variant='h4'>404 - Страница не найдена!</Typography>
      </Box>
    </TemplatePage>
  )
}
