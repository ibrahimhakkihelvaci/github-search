import React, { FunctionComponent } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

//Comps
import MenuItems from "../../Layouts/components/MenuItems/MenuItems";
import RepoDetails from "../../Layouts/components/RepoDetails";
import UserDetails from "../../Layouts/components/UserDetails";
import Bookmarks from '../../Layouts/components/Bookmarks'

const MenuRoute: FunctionComponent = () => {
	return (
		<HashRouter>
			<Route path={["/repositories", "/users", "/search-bookmarks"]} exact component={MenuItems} />
			<Route path='/bookmarks' exact component={Bookmarks} />
			<Route path='/repo-details/:owner/:name' exact component={RepoDetails} />
			<Route path='/user-details/:id' exact component={UserDetails} />
		</HashRouter>
	);
};

export default MenuRoute;
