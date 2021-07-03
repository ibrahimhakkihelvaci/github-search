import { REMOVE_BOOKMARK, ADD_BOOKMARK } from "./types";
import { Dispatch } from "redux";



export const add_bookmark = (repository: any) => async (dispatch: Dispatch): Promise<void> => {
    try {
        dispatch({
            type: ADD_BOOKMARK,
            payload: repository
        });



    } catch (error) {
        console.log(error);
    }
};