import React, { FunctionComponent } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

//Pages
import Results from "../../Pages/Results";
import RepoDetails from "../../Pages/RepoDetails";
import UserDetails from "../../Pages/UserDetails";

//Redux
import { connect } from 'react-redux'
import { UsersReducersProps } from '../../data/reducers/usersReducer'
import { RepositoriesReducersProps } from '../../data/reducers/repositoriesReducer'

type ContentRouteProps = {
	users: UsersReducersProps,
	repositiories: RepositoriesReducersProps
}

const ContentRoute: FunctionComponent<ContentRouteProps> = ({ repositiories, users }) => {

	return (
		<HashRouter>
			<Switch>
				<Route path='/' exact>
					<Results isRepo={true} data={repositiories} />
				</Route>
				<Route path='/users' exact>
					<Results isRepo={false} data={users} />
				</Route>
				<Route path='/repo-details/:owner/:name' exact component={RepoDetails} />
				<Route path='/user-details/:id' exact component={UserDetails} />
			</Switch>
		</HashRouter>
	);
};

type reduxProps = {
	Users: UsersReducersProps;
	Repositiories: RepositoriesReducersProps;
};
const mapStateToProps = (state: reduxProps) => ({
	users: state.Users,
	repositiories: state.Repositiories
});

export default connect(mapStateToProps)(ContentRoute);
