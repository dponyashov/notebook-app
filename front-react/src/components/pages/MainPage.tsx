import { Link } from "react-router-dom"
import { AppRoutes } from "../../consts/routes";
import { PageCaptions } from "../../consts/pageCaptions";

const MainPage = () => {
  return (
    <>
      <h3>{PageCaptions.HOME}</h3>
      <p><Link to={AppRoutes.LOGIN.value}>{AppRoutes.LOGIN.caption}</Link></p>
      <p><Link to={AppRoutes.SCHEDULES.value}>{AppRoutes.SCHEDULES.caption}</Link></p>
      <p><Link to={AppRoutes.ABOUT.value}>{AppRoutes.ABOUT.caption}</Link></p>
    </>
  )
}

export default MainPage;