export type Repository = {
    id: string,
    name: string,
    description: string,
    full_name: string,
    html_url: string,
    subscribers_count: number,
    stargazers_count: number,
    forks: number,
    branch: number,
    open_issues: number,
    pull_requests: number,
    owner: {
        login: string
    }
}

export type User = {
    login: string,
    description: string,
    avatar: string
}