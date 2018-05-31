//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/Home';
import Edit from './views/Edit';
import Display from './views/Display';


class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path="/home" component={Home} />
					<Route path="/edit" component={Edit} />
					<Route path="/display" component={Display} />
				</div>
			</Router>
		);
	}
}

export default App;
