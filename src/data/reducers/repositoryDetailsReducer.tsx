import { SET_REPOSITORY } from "../actions/types";
import { Repository } from '../../types'

export type RepositoryDetailsReducerProps = {
    repository: Repository
};

const initialState: RepositoryDetailsReducerProps = {
    repository: {} as Repository
};

type Action = {
    type: "SET_REPOSITORY";
    payload: RepositoryDetailsReducerProps
};

export default function (
    state = initialState,
    action: any
): RepositoryDetailsReducerProps {
    const { type, payload } = action;

    switch (type) {
        case SET_REPOSITORY:
            return {
                ...state,
                repository: payload
            };
        default:
            return { ...state };
    }
}
