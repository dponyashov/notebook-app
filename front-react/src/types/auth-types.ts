export interface IRegistrationData {
    // username: string;
    email: string;
    password: string;
    // confirmPassword: string;
}

export interface ILoginData {
    username: string;
    password: string;
}

export interface IRoles {
    name: string;
    description: string;
}

export interface IUser {
    id: number;
    login: string;
    name: string;
    roles: IRoles[]
}

export interface IShortUser {
    id: number;
    name: string;
}