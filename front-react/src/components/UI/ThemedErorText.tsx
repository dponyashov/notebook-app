import type { FC } from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

interface ThemedErorTextProps {
    caption: string;
    text: string;
}

const ThemedErorText: FC<ThemedErorTextProps> = ({caption = '', text = '', ...props}) => {
    return (
        <Alert severity="error" {...props}>
            <AlertTitle>
                <span>
                    <strong>
                        {caption}
                    </strong>
                    {text}
                </span>
            </AlertTitle>
        </Alert>


    )
}

export default ThemedErorText