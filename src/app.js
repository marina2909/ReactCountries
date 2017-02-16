import React from 'react';
import CountryList from './countrylist';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import countries from './countryInfo.json';
import Button from './button';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Countries</h1>
				<Button title="Population chart" 
					link='/populationChart' />
				<CountryList countries={countries} />
			</div>
		);
	}
}

