import TemplatePage from "./TemplatePage"
import { PageCaptions } from "../../consts/pageCaptions";

import ScheduleListForm from "../forms/ScheduleListForm";
import { useState } from "react";
import type { IShortUser} from "../../types/auth-types";
import { Box } from "@mui/material";
import ThemedWarningText from "../UI/ThemedWarningText";
import { ThemedLoader } from "../UI/ThemedLoader";
import { fakeUserList } from "../../fake/fakeSelectOptions";
import ThemedUserList from "../UI/ThemedUserList";

const AdministratorPage = () => {

    const [selectedUser, setSelectedUser] = useState<IShortUser | null>();

    const userList = fakeUserList.map(user => {return {...user}});

    const selectHandle = (user: IShortUser | null) => {
        setSelectedUser(user);
    }

    return (
        <TemplatePage pageCaption={PageCaptions.ADMINISTRATION}>
            <Box style={{display: 'flex'}}>
                <Box style={{width: '30vh'}}>
                    { !userList &&
                        <ThemedLoader />
                    }
                    
                    { userList &&
                        <ThemedUserList users={userList} onSelect={selectHandle} />                              
                    }
                </Box>
                <Box style={{width: '100%'}}>
                    {!selectedUser &&
                        <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh'}}>
                            <ThemedWarningText caption = '' text = 'Необходимо выбрать пользователя'></ThemedWarningText>
                        </Box>
                    }
                    {selectedUser &&
                        <ScheduleListForm user={selectedUser}/>
                    }
                </Box>
            </Box>
        </TemplatePage>
    )
}

export default AdministratorPage