import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Countries from './countrylist';
import PopulationChart from './populationChart';
import countries from './countryInfo.json';

class Application extends React.Component {
	constructor(props) {
		super(props);
		this._prepareCountries(countries);
	}

	_prepareCountries(countries){
		countries.forEach(c => c.Country = c.Country.length > 15 ? `${c.Country.substring(0, 15)}...` : c.Country);
		countries.sort((a, b) => b.Population - a.Population);
	}

	render(){
		return (
			<div>
				<Router history={hashHistory}>
					<Route path="/" component={PopulationChart} countries={countries} />
					<Route path="/charts/(:country1)(/:country2)" component={PopulationChart} countries={countries} />
					<Route path="countrylist" component={Countries} countries={countries} />
				</Router>
			</div> 
		)
	}
}

ReactDOM.render(
	<Application />,
	document.getElementById('main-container')
);





