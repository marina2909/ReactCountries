import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './app';
import PopulationChart from './populationChart';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="populationChart" component={PopulationChart} />
	</Router>,
	document.getElementById('main-container')
);





