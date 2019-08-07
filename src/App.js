import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Principal from './Principal.jsx';

import './App.css';

export default class App extends Component {
  	render() {
		return (
			<Router>
				<div>
					<Route path="/categoria/:categoria" component={Principal}></Route>
					<Route path="/" exact component={Principal}></Route>
				</div>
			</Router>
		);
	}
}

