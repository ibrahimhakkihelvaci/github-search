import React, { FunctionComponent } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

//Comps
import MenuItems from "../../Layouts/components/MenuItems/MenuItems";
import RepoDetails from "../../Layouts/components/RepoDetails";
import UserDetails from "../../Layouts/components/UserDetails";

const MenuRoute: FunctionComponent = () => {
	return (
		<HashRouter>
			<Route path='/' exact component={MenuItems} />
			<Route path='/users' exact component={MenuItems} />
			<Route path='/repo-details/:id' exact component={RepoDetails} />
			<Route path='/user-details/:id' exact component={UserDetails} />
		</HashRouter>
	);
};

export default MenuRoute;
