import { SET_REPOSITORY } from "./types";
import { Dispatch } from "redux";

//Requests
import requests from '../../utils/agent'

export const get_repo_details = (owner: string, name: string) => async (dispatch: Dispatch): Promise<void> => {
    try {

        const res = await requests.getRepoDetails(owner, name)
        const { data } = res
        dispatch({
            type: SET_REPOSITORY,
            payload: data
        });

    } catch (error) {
        console.log(error);
    }
};