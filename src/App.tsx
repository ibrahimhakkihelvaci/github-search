import React from "react";
import logo from "./logo.svg";
import "./App.css";

//Layouts
import AppLayout from "./Layouts/AppLayout";

//Routes
import ContentRoute from "./Routes";

//redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<AppLayout>
				<ContentRoute />
			</AppLayout>
		</Provider>
	);
}

export default App;
