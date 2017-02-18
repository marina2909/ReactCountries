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

		this._onShowGraph = this._onShowGraph.bind(this);
	}

	_prepareCountries(countries){
		countries.forEach(c => c.Country = c.Country.length > 15 ? `${c.Country.substring(0, 15)}...` : c.Country);
		countries.sort((a, b) => b.Population - a.Population);
	}

	_getCountries(){
		if (this.state.show == 'all') {
			return this.countries;
		} else if (this.state.show == 'max10'){
			return this.countries.slice(0, 10);
		} else if (this.state.show == 'compare'){
			return this.countries.filter(c => 
				c.Country == this.country1.value || c.Country == this.country2.value);
		}
	}

	_onShowGraph(showChoice){
		this.setState({show: showChoice});
	}

	componentDidMount(){
		let options = '';
		this.countries.forEach(c => options+=`<option value="${c.Country}" />`);
		this.datalistCountries.innerHTML = options;
	}

	render() {
		return (
			<div>
				<span className="col-md-1 col-md-offset-1"><Button title="Home" link='/'/></span>
				<h1>Population by country</h1>
				<BarChart width={1000} 
					height={420} 
					data={this._getCountries()} 
					margin={{top: 5, right: 30, left: 40, bottom: 5}}>
					<XAxis dataKey="Country" />
					<YAxis tickFormatter={v => v.toLocaleString()} />
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip formatter={v => v.toLocaleString()} />
					<Legend />
					<Bar dataKey="Population" fill="#82ca9d" />
				</BarChart>
				<div className="panel panel-primary">
					<div className="panel-body">
						<span className="col-md-2">
							{ 	
								this.state.show == 'all' ? 
								<span onClick={() => this._onShowGraph('max10')} 
									className="col-md-1 col-md-offset-1">
									<Button title="Show top 10 countries" />
								</span> : 
								<span onClick={() => this._onShowGraph('all')} 
									className="col-md-1 col-md-offset-1">
									<Button title="Show all countries" />
								</span> 
							}
						</span>
						<span className="col-md-2 col-md-offset-2">
							<input list="countries" 
								ref={input => this.country1 = input}
								placeholder="Choose country 1" 
								className="form-control" />
						</span>
						<span className="col-md-2">
							<input list="countries" 
								ref={input => this.country2 = input}
								placeholder="Choose country 2"
								className="form-control" />
						</span>
						<span onClick={() => this._onShowGraph('compare')} 
							className="col-md-1">
							<Button title="Compare 2 countries" />
						</span> 
						<datalist id="countries"
							ref={input => this.datalistCountries = input} />
					</div>
				</div>
			</div>
		);
	}
}