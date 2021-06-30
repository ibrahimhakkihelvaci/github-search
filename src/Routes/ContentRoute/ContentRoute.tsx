import React, { FunctionComponent } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

//Pages
import Results from "../../Pages/Results";
import RepoDetails from "../../Pages/RepoDetails";

const ContentRoute: FunctionComponent = () => {
	return (
		<HashRouter>
			<Switch>
				<Route path='/' exact>
					<Results isRepo={true} />
				</Route>
				<Route path='/users' exact>
					<Results isRepo={false} />
				</Route>
				<Route path='/repo-details/:id' exact component={RepoDetails} />
			</Switch>
		</HashRouter>
	);
};

export default ContentRoute;
