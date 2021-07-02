import { SET_REPOSITORIES, SET_LOADING } from "../actions/types";

export type RepositoriesReducersProps = {
	total_count: number;
	list: any;
	loading: boolean
};

const initialState: RepositoriesReducersProps = {
	total_count: 0,
	list: [],
	loading: false
};



type Action =
	| {
		type: "SET_REPOSITORIES";
		payload: RepositoriesReducersProps,

	}
	| {
		type: 'SET_LOADING';
		payload: RepositoriesReducersProps
	}


export default function (
	state = initialState,
	action: Action
): RepositoriesReducersProps {
	const { type, payload } = action;
	switch (type) {
		case SET_REPOSITORIES:
			return {
				...state,
				total_count: payload.total_count,
				list: payload.list,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			}
		default:
			return { ...state };
	}
}
