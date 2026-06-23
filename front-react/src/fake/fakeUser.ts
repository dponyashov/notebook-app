import type { IUser } from "../types/auth-types";

// export const currentUser = null;
export const currentUser: IUser = {
    id: 1,
    login: 'login_user1',
    name: 'Первый Пользователь',
    roles: [
        {
            name: 'USER',
            description: 'Пользователь'
        },
        {
            name: 'ADMIN',
            description: 'Админ'
        },
        {
            name: 'ADMINISTRATOR',
            description: 'Админ'
        }
    ]
}

export const userChecked = true;