import { SET_REPOSITORIES } from "../actions/types";

export type RepositoriesReducersProps = {
	total_count: number;
	list: any;
};

const initialState: RepositoriesReducersProps = {
	total_count: 0,
	list: [],
};

type Action = {
	type: "SET_REPOSITORIES";
	payload: {
		total_count: number;
		list: [];
	};
};

export default function (
	state = initialState,
	action: Action
): RepositoriesReducersProps {
	const { type, payload } = action;
	console.log(payload)
	switch (type) {
		case SET_REPOSITORIES:
			return {
				...state,
				total_count: payload.total_count,
				list: payload.list,
			};
		default:
			return { ...state };
	}
}
