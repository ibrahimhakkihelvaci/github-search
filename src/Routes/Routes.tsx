import React, { FunctionComponent } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

//Pages
import Results from "../Pages/Results";

const Routes: FunctionComponent = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Results} />
			</Switch>
		</Router>
	);
};

export default Routes;
