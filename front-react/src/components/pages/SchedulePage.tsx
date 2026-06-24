import { PageCaptions } from "../../consts/pageCaptions";
import { fakeUserList } from "../../fake/fakeSelectOptions";
import { useUser } from "../../hooks/useUser";
import ScheduleListForm from "../forms/ScheduleListForm";
import TemplatePage from "./TemplatePage";

const SchedulePage = () => {

    const {user} = useUser();
    const selectedUsers = fakeUserList.filter(fakeUser => fakeUser.id === user.id);

    return (
        <TemplatePage pageCaption={PageCaptions.SCHEDULE}>
            <ScheduleListForm user={selectedUsers[0]} />
        </TemplatePage>
    )
}

export default SchedulePage;