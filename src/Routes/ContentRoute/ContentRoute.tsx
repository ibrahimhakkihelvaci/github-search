import React, { FunctionComponent } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

//Pages
import RepoDetails from "../../Pages/RepoDetails";
import UserDetails from "../../Pages/UserDetails";
import SearchResults from "../../Pages/SearchResults";

const ContentRoute: FunctionComponent = () => {

	return (
		<HashRouter>
			<Switch>
				<Route path='/repositories' exact component={SearchResults} />
				<Route path='/users' exact component={SearchResults} />
				<Route path='/bookmarks' exact component={SearchResults} />
				<Route path='/search-bookmarks' exact  >
					<SearchResults isSearchBookmark={true} />
				</Route>
				<Route path='/repo-details/:owner/:name' exact component={RepoDetails} />
				<Route path='/user-details/:id' exact component={UserDetails} />
			</Switch>
		</HashRouter>
	);
};


export default (ContentRoute);
