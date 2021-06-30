import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

//reducers
import repositoriesReducer from "./data/reducers/repositoriesReducer";
import usersReducer from "./data/reducers/usersReducer";

const middleware = [thunk];

const initialState = {};

const appReducers = combineReducers({
	Repositiories: repositoriesReducer,
	Users: usersReducer,
});

const store = createStore(
	appReducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
