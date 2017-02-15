import React from 'react';
import ReactDOM from 'react-dom';
import CountryList from './countrylist';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import countries from './countryInfo.json'
import PopulationChart from './populationChart';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="container">
				<PopulationChart countries={countries}/>
				<CountryList countries={countries} />
			</div>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('main-container'));
