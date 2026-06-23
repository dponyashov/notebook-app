import { Alert, AlertTitle, Box, Typography } from '@mui/material'


interface ThemedWarningTextProps {
    caption: string;
    text: string;
}

function ThemedWarningText({caption = '', text = '', ...props}) {
    return (
        <Alert severity="warning" {...props}>
            <AlertTitle>
                <Box style={{display: 'flex', gap: 10}}>
                    <Typography variant="h6">{caption}</Typography>
                    <Typography>{text}</Typography>
                </Box>
            </AlertTitle>
        </Alert>


    )
}

export default ThemedWarningText