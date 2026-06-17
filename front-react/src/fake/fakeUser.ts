// export const currentUser = null;
export const currentUser = {
    id: 1,
    login: 'Текущий авторизовавшийся пользователь',
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