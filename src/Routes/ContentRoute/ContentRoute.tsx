import React, { FunctionComponent } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

//Pages
import RepoDetails from "../../Pages/RepoDetails";
import UserDetails from "../../Pages/UserDetails";
import Repositories from "../../Pages/Repositories";
import Users from "../../Pages/Users";
import EmptyPage from "../../Pages/EmptyPage";

const ContentRoute: FunctionComponent = () => {

	return (
		<HashRouter>
			<Switch>
				<Route path='/repositories' exact component={Repositories} />
				<Route path='/users' exact component={Users} />
				<Route path='/repo-details/:owner/:name' exact component={RepoDetails} />
				<Route path='/user-details/:id' exact component={UserDetails} />
			</Switch>
		</HashRouter>
	);
};


export default (ContentRoute);
