import React from "react";
import logo from "./logo.svg";
import "./App.css";

//Layouts
import AppLayout from "./Layouts/AppLayout";

//Routes
import ContentRoute from "./Routes";

function App() {
	return (
		<AppLayout>
			<ContentRoute />
		</AppLayout>
	);
}

export default App;
