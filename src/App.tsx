import React from "react";
import logo from "./logo.svg";
import "./App.css";

//Layouts
import AppLayout from "./Layouts/AppLayout";

//Routes
import Routes from "./Routes";

function App() {
	return (
		<AppLayout>
			<Routes />
		</AppLayout>
	);
}

export default App;
