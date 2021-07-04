import { REMOVE_BOOKMARK, ADD_BOOKMARK, FILTER_BOOKMARKS } from "./types";
import { Dispatch } from "redux";
import store from '../../store'



export const add_bookmark = (repository: any) => async (dispatch: Dispatch): Promise<void> => {
    try {
        localStorage.setItem('bookmarks', JSON.stringify([...returnBookmarksInStorage(), repository]))
        dispatch({
            type: ADD_BOOKMARK,
            payload: repository
        });
    } catch (error) {
        console.log(error);
    }
};

export const remove_bookmark = (repoId: string) => (dispatch: Dispatch) => {
    try {
        let removedBookmark = returnBookmarksInStorage().filter((bookmark: any) => bookmark.id != repoId)
        localStorage.setItem('bookmarks', JSON.stringify([...removedBookmark]))
        dispatch({
            type: REMOVE_BOOKMARK,
            payload: {
                id: repoId
            }
        });
    } catch (error) {
        console.log(error);
    }
};

export const filter_bookmarks = (searchStr: string) => (dispatch: Dispatch) => {
    try {
        dispatch({
            type: FILTER_BOOKMARKS,
            payload: store.getState().Bookmarks.list.filter((bookmark) =>
                bookmark.name.toLowerCase().indexOf(searchStr.toLowerCase()) > -1)
        });
    } catch (error) {
        console.log(error);
    }
};

const returnBookmarksInStorage = () => {
    let bookmarksInStorage = localStorage.getItem('bookmarks')
    let addedBookmarks = bookmarksInStorage ? JSON.parse(bookmarksInStorage) : []
    return addedBookmarks
}