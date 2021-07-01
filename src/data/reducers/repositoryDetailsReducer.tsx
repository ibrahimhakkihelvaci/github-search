import { SET_REPOSITORY } from "../actions/types";

export type RepositoryDetailsReducerProps = {
    full_name: string,
    description: string,
    url: string,
    watchers: number,
    stargazers_count: number,
    forks: number,
    branch: number,
    open_issues: number,
    pull_requests: number
};

const initialState: RepositoryDetailsReducerProps = {
    full_name: "",
    description: "",
    url: "",
    watchers: 0,
    stargazers_count: 0,
    forks: 0,
    branch: 0,
    open_issues: 0,
    pull_requests: 0
};

type Action = {
    type: "SET_REPOSITORY";
    payload: RepositoryDetailsReducerProps
};

export default function (
    state = initialState,
    action: Action
): RepositoryDetailsReducerProps {
    const { type, payload } = action;

    switch (type) {
        case SET_REPOSITORY:
            return {
                ...state,
                full_name: payload.full_name,
                description: payload.description,
                url: payload.url,
                watchers: payload.watchers,
                stargazers_count: payload.stargazers_count,
                forks: payload.forks,
                open_issues: payload.open_issues,

            };
        default:
            return { ...state };
    }
}
