import React from 'react';
import Button from './button';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


export default class PopulationChart extends React.Component{
	constructor(props){
		super(props);
		this._setInitialState(props.params);
		this._onShowGraph = this._onShowGraph.bind(this);
	}

	_setInitialState(params){  
		this.state = {
			show: params.country1 && params.country2 ? 'compare' : 'max10',
			country1: params.country1 ? params.country1 : '',
			country2: params.country2 ? params.country2 : ''
		};
		this.state = {countriesOnGraph: this._getCountriesOnGraph(this.state.show)};
	}

	_changeState(show){
		let c = this._getCountriesOnGraph(show);
		this.setState({countriesOnGraph: c.length ? c : this.state.countriesOnGraph, 
			show: show});
	}

	_getCountriesOnGraph(show){
		let countries = this.props.route.countries;
		if (show == 'max10'){
			countries = countries.slice(0, 10);
		} else if (show == 'compare'){
			countries = countries.filter(c => c.Country == this.state.country1 || c.Country == this.state.country2);
		}
		return countries;
	}

	_onShowGraph(showChoice){
		this._changeState(showChoice)
		if (showChoice != 'compare'){
			this.setState({country1 : '', country2: ''});
		}
	}

	render() {
		return (
			<div>
				<h1 className="text-center">Population by country 
					{ this.state.show == 'max10' && '(max 10 countries)' }	
					{ this.state.show == 'all' && '(all countries)' }
				</h1>
				<div className="text-right"><Button title="List countries" link='/countrylist'/></div>
				<div className="panel panel-primary margin-top-3">
					<div className="panel-body">
						<span className="col-md-2">
							{ 	
								this.state.show == 'all' ? 
								<Button
									onClick={() => this._onShowGraph('max10')} 
									className="col-md-1 col-md-offset-1"
									link='/'
									title="Show top 10 countries" /> : 
								<Button
									onClick={() => this._onShowGraph('all')}  
									className="col-md-1 col-md-offset-1"
									link='/'
									title="Show all countries" />
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
						<Button onClick={() => this._onShowGraph('compare')} 
							className="col-md-1"
							link={`/charts/${this.state.country1}/${this.state.country2}`}
							title="Compare 2 countries" /> 
						<datalist id="countries">
							{this.props.route.countries.map(c => <option key={c.Country} value={c.Country} />)}
						</datalist>
					</div>
				</div>
				<div className="row">
					<span className="col-md-6">
						<PopulationChart.Chart 
							dataKey = "Population"
							fill = "#82ca9d"
							width = {600}
							height = {360}
							countriesOnGraph = {this.state.countriesOnGraph}/>
					</span>
					<span className="col-md-6">
						<PopulationChart.Chart 
							dataKey = "Area"
							fill = "#F39C12"
							width = {600}
							height = {360}
							countriesOnGraph = {this.state.countriesOnGraph}/>
					</span>
				</div>
				
			</div>
		);
	}
}

PopulationChart.Chart = class extends React.Component{
	constructor(props){
		super(props);
	}
	render() {
		return(
				<BarChart width={this.props.width} 
					height={this.props.height} 
					data={this.props.countriesOnGraph} 
					margin={{top: 5, right: 30, left: 40, bottom: 5}}>
					<XAxis dataKey="Country" />
					<YAxis tickFormatter={v => v.toLocaleString()} />
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip formatter={v => v.toLocaleString()} />
					<Legend />
					<Bar dataKey={this.props.dataKey} fill={this.props.fill} />
				</BarChart>
		);
	}
}