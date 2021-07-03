import React, { FunctionComponent } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

//Pages
import RepoDetails from "../../Pages/RepoDetails";
import UserDetails from "../../Pages/UserDetails";
import Repositories from "../../Pages/Repositories";
import Users from "../../Pages/Users";
import Bookmarks from "../../Pages/Bookmarks";

const ContentRoute: FunctionComponent = () => {

	return (
		<HashRouter>
			<Switch>
				<Route path='/repositories' exact component={Repositories} />
				<Route path='/users' exact component={Users} />
				<Route path='/bookmarks' exact component={Bookmarks} />
				<Route path='/repo-details/:owner/:name' exact component={RepoDetails} />
				<Route path='/user-details/:id' exact component={UserDetails} />
			</Switch>
		</HashRouter>
	);
};


export default (ContentRoute);
