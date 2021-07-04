import { ADD_BOOKMARK, REMOVE_BOOKMARK, FILTER_BOOKMARKS } from "../actions/types";
import { Repository } from '../../types'

export type BookmarksReducersProps = {
    total_count: number;
    list: Repository[];
    filteredBookmarks: Repository[]

};

const initialState: BookmarksReducersProps = {
    total_count: 0,
    list: [],
    filteredBookmarks: []
};



type Action =
    | {
        type: "ADD_BOOKMARK";
        payload: Repository,

    }
    | {
        type: "REMOVE_BOOKMARK";
        payload: Repository,

    }
    | {
        type: "FILTER_BOOKMARKS";
        payload: any,

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
        case REMOVE_BOOKMARK:
            return {
                ...state,
                total_count: state.total_count - 1,
                list: state.list.filter((item) => item.id != payload.id)
            }
        case FILTER_BOOKMARKS:
            return {
                ...state,
                filteredBookmarks: payload
            }

        default:
            return { ...state };
    }
}
