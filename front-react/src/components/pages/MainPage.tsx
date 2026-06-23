import { Link } from "react-router-dom"
import { AppRoutes } from "../../consts/routes";
import { PageCaptions } from "../../consts/pageCaptions";
import { Box, Typography } from "@mui/material";
import TemplatePage from "./TemplatePage";
import { useUser } from "../../hooks/useUser";

const MainPage = () => {
    const {user} = useUser();
    return (
        <TemplatePage pageCaption={PageCaptions.HOME}>
            <Box style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
            }}>
                {
                    !user && <Link to={AppRoutes.LOGIN.value}>
                        <Typography variant="h4">{AppRoutes.LOGIN.caption}</Typography>
                    </Link>
                }
                <Link to={AppRoutes.SCHEDULES.value}>
                    <Typography variant="h3">{AppRoutes.SCHEDULES.caption}</Typography>
                </Link>
                <Link to={AppRoutes.ADMINISTRATION.value}>
                    <Typography variant="h3">{AppRoutes.ADMINISTRATION.caption}</Typography>
                </Link>
                <Link to={AppRoutes.ABOUT.value}>
                    <Typography variant="h4">{AppRoutes.ABOUT.caption}</Typography>
                </Link>
            </Box>
        </TemplatePage>
    )
}

export default MainPage;