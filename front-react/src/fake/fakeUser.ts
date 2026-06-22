// export const currentUser = null;
export const currentUser = {
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
    ]
}

export const userChecked = true;//!!currentUser;