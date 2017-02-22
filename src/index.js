import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Countries from './countrylist';
import PopulationChart from './populationChart';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Countries} />
		<Route path="populationChart" component={PopulationChart} />
	</Router>,
	document.getElementById('main-container')
);





