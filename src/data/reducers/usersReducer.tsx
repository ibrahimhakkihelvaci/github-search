import { SET_USERS } from "../actions/types";

export type UsersReducersProps = {
	total_count: number;
	list: any;
};

const initialState: UsersReducersProps = {
	total_count: 0,
	list: [],
};

type Action = {
	type: "SET_USERS";
	payload: UsersReducersProps
};

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
			};
		default:
			return { ...state };
	}
}
