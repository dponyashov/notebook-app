import { Link } from "react-router-dom"
import { AppRoutes } from "../../consts/routes";
import { PageCaptions } from "../../consts/pageCaptions";
import { Typography } from "@mui/material";
import TemplatePage from "./TemplatePage";

const MainPage = () => {
    return (
        <TemplatePage pageCaption={PageCaptions.HOME}>
          <p><Link to={AppRoutes.LOGIN.value}><Typography>{AppRoutes.LOGIN.caption}</Typography></Link></p>
          <p><Link to={AppRoutes.SCHEDULES.value}><Typography>{AppRoutes.SCHEDULES.caption}</Typography></Link></p>
          <p><Link to={AppRoutes.ABOUT.value}><Typography>{AppRoutes.ABOUT.caption}</Typography></Link></p>
        </TemplatePage>
    )
}

export default MainPage;