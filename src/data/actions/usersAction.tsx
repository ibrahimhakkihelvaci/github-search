import { SET_USERS } from "./types";
import { Dispatch } from "redux";

//Requests
import requests from '../../utils/agent'

export const get_users = (query: string) => async (dispatch: Dispatch): Promise<void> => {
    try {

        const res = await requests.getUsers(query)
        const { data } = res

        dispatch({
            type: SET_USERS,
            payload: {
                total_count: data.total_count,
                list: data.items
            }
        });

    } catch (error) {
        console.log(error);
    }
};