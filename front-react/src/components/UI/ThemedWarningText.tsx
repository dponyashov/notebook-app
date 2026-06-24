import { Alert, AlertTitle, Box, Typography } from '@mui/material'
import type { FC } from 'react';


interface ThemedWarningTextProps {
    caption: string;
    text: string;
}

const ThemedWarningText: FC<ThemedWarningTextProps> = ({caption = '', text = '', ...props}) => {
    return (
        <Alert severity="warning" {...props} >
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