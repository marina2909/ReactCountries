import React from 'react';
import countries from './countryInfo.json';
import Button from './button';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default class PopulationChart extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			show: 'all'
		};
		
		this.countries = countries;
		this._prepareCountries(this.countries);
	}

	_prepareCountries(countries){
		countries.forEach(c => c.Country = c.Country.length > 15 ? `${c.Country.substring(0, 15)}...` : c.Country);
		countries.sort((a, b) => b.Population - a.Population);
	}

	_getCountries(){
		return this.state.show == 'all' ? this.countries : this.countries.slice(0, 10);
	}

	_onMax10Click(){
		this.setState({show: 'max10'});
	}

	_onAllClick(){
		this.setState({show: 'all'});
	}

	render() {
		return (
			<div>
				<span className="col-md-1 col-md-offset-1"><Button title="Home" link='/'/></span>
				<h1>Population by country</h1>
				<div>
					<BarChart width={1000} 
						height={420} 
						data={this._getCountries()} 
						margin={{top: 5, right: 30, left: 40, bottom: 5}}>
						<XAxis dataKey="Country" />
						<YAxis tickFormatter={value => value.toLocaleString()} />
						<CartesianGrid strokeDasharray="3 3" />
						<Tooltip />
						<Legend />
						<Bar dataKey="Population" fill="#82ca9d" />
					</BarChart>
					{ 
						this.state.show == 'all' ? 
						<span onClick={this._onMax10Click.bind(this)} 
							className="col-md-1 col-md-offset-1">
							<Button title="Show top 10 countries" />
						</span> : 
						<span onClick={this._onAllClick.bind(this)} 
							className="col-md-1 col-md-offset-1">
							<Button title="Show all countries" />
						</span> 
					}
				</div>
			</div>
		);
	}
}