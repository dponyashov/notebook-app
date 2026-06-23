import { PageCaptions } from "../../consts/pageCaptions";
import { useUser } from "../../hooks/useUser";
import ScheduleListForm from "../forms/ScheduleListForm";
import TemplatePage from "./TemplatePage";

const SchedulePage = () => {

    const {user} = useUser();

    return (
        <TemplatePage pageCaption={PageCaptions.SCHEDULE}>
            <ScheduleListForm user={user} />
        </TemplatePage>
    )
}

export default SchedulePage;