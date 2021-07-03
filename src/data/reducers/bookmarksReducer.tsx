import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "../actions/types";
import { Repository } from '../../types'

export type BookmarksReducersProps = {
    total_count: number;
    list: Repository[];

};

const initialState: BookmarksReducersProps = {
    total_count: 0,
    list: [],
};



type Action =
    | {
        type: "ADD_BOOKMARK";
        payload: Repository,

    }



export default function (
    state = initialState,
    action: Action
): BookmarksReducersProps {
    const { type, payload } = action;
    switch (type) {
        case ADD_BOOKMARK:
            return {
                ...state,
                total_count: state.total_count + 1,
                list: [...state.list, ...[payload]],
            };

        default:
            return { ...state };
    }
}
