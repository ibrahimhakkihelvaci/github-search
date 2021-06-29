import React, { FunctionComponent } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

//Pages
import Home from "../Pages/Home";
import Detail from "../Pages/Detail";

const Routes: FunctionComponent = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/detail' exact component={Detail} />
			</Switch>
		</Router>
	);
};

export default Routes;
