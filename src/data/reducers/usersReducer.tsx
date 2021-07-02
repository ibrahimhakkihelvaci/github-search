import { SET_USERS, SET_LOADING } from "../actions/types";

export type UsersReducersProps = {
	total_count: number;
	list: any;
	loading: boolean
};

const initialState: UsersReducersProps = {
	total_count: 0,
	list: [],
	loading: false
};


type Action =
	| {
		type: "SET_USERS";
		payload: UsersReducersProps,

	}
	| {
		type: 'SET_LOADING';
		payload: UsersReducersProps
	}


export default function (
	state = initialState,
	action: Action
): UsersReducersProps {
	const { type, payload } = action;

	switch (type) {
		case SET_USERS:
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
