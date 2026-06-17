import { currentUser, userChecked } from "../fake/fakeUser"

export const useUser = () => {

    const user = currentUser;
    const authChecked = userChecked;

    return { user, authChecked };
}