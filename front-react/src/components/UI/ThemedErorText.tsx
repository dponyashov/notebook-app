import type { FC } from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Box, Typography } from "@mui/material";

interface ThemedErorTextProps {
    caption: string;
    text: string;
}

const ThemedErorText: FC<ThemedErorTextProps> = ({caption = '', text = '', ...props}) => {
    return (
        <Alert severity="error" {...props}>
            <AlertTitle>
                <Box style={{display: 'flex', gap: 10}}>
                    <Typography variant="h6">{caption}</Typography>
                    <Typography>{text}</Typography>
                </Box>
            </AlertTitle>
        </Alert>


    )
}

export default ThemedErorText