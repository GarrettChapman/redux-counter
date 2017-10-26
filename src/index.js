import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import "./index.css";
import store from './store';

import App from "./App";

ReactDOM.render(
	//you will only have 1 store
	<Provider store={store}>
		<App />
	</Provider>

	, document.getElementById( 'root' )
);
