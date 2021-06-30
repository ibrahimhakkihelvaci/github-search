import { SET_REPOSITORIES } from "./types";
import { Dispatch } from "redux";
import axios from "axios";

//Requests
import requests from '../../utils/agent'

export const get_repositories = (query: string) => async (dispatch: Dispatch): Promise<void> => {
	try {

		const res = await requests.getRepositories(query)
		const { data } = res

		dispatch({
			type: SET_REPOSITORIES,
			payload: {
				total_count: data.total_count,
				list: data.items
			}
		});

	} catch (error) {
		console.log(error);
	}
};