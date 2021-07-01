import { SET_REPOSITORY } from "./types";
import { Dispatch } from "redux";
import axios from "axios";

//Requests
import requests from '../../utils/agent'

export const get_repo_details = (username: string, repoName: string) => async (dispatch: Dispatch): Promise<void> => {
    try {

        const res = await requests.getRepoDetails(username, repoName)
        const { data } = res
        dispatch({
            type: SET_REPOSITORY,
            payload: data
        });

    } catch (error) {
        console.log(error);
    }
};