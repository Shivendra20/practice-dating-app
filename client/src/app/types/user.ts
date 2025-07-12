export type User = {
    id: string;
    username: string;
    email: string;
    imageUrl?: string;
    token: string;
}

export type LoginCreds = {
    email: string;
    password: string;
}

export type RegisterCreds = {
    displayName: string;
    email: string;
    password: string;
}