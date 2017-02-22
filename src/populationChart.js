import React from 'react';
import Button from './button';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default class PopulationChart extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			show: 'all',
			countriesOnGraph: this.props.route.countries,
			country1: '',
			country2: ''
		};
		this._onShowGraph = this._onShowGraph.bind(this);
	}

	_setCountriesOnGraph(show){
		let countries = [];
		if (show == 'all') {
			countries = this.props.route.countries;
		} else if (show == 'max10'){
			countries = this.props.route.countries.slice(0, 10);
		} else if (show == 'compare'){
			countries = this.props.route.countries.filter(c => 
				c.Country == this.state.country1 || c.Country == this.state.country2);
		}
		this.setState({countriesOnGraph: countries, show: show});
	}

	_onShowGraph(showChoice){
		this._setCountriesOnGraph(showChoice)
		if (showChoice != 'compare'){
			this.setState({country1 : '', country2: ''});
		}
	}

	render() {
		return (
			<div>
				<span className="col-md-1 col-md-offset-1"><Button title="Home" link='/'/></span>
				<h1>Population by country 
					{ this.state.show == 'max10' && '(max 10 countries)' }	
					{ this.state.show == 'all' && '(all countries)' }
				</h1>
				<BarChart width={1000} 
					height={420} 
					data={this.state.countriesOnGraph} 
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
								placeholder="Choose country 1" 
								className="form-control"
								value={this.state.country1}
								onChange={evt => this.setState({country1 : evt.target.value })}/>
	
						</span>
						<span className="col-md-2">
							<input list="countries" 
								placeholder="Choose country 2"
								className="form-control"
								value={this.state.country2}
								onChange={evt => this.setState({country2 : evt.target.value })}/>
						</span>
						<span onClick={() => this._onShowGraph('compare')} 
							className="col-md-1">
							<Button title="Compare 2 countries" />
						</span> 
						<datalist id="countries">
							{this.props.route.countries.map(c => <option key={c.Country} value={c.Country} />)}
						</datalist>
					</div>
				</div>
			</div>
		);
	}
}