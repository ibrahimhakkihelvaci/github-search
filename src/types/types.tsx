export type Repository = {
    name: string,
    description: string,
    owner: {
        login: string
    }
}

export type User = {
    login: string,
    description: string,
    avatar: string
}