import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default class PopulationChart extends React.Component{
		constructor(props){
		super(props);
		this.props.countries.sort((a, b) => b.Population - a.Population);
	}

	render() {
		return (
			<div>
			<BarChart width={630} 
					height={300} 
					data={this.props.countries} 
					margin={{top: 5, right: 30, left: 40, bottom: 5}}>
			       		<XAxis dataKey="Country" />
			       		<YAxis tickFormatter={value => value.toLocaleString()} />
			       		<CartesianGrid strokeDasharray="3 3" />
			       		<Tooltip />
			       		<Legend />
			       		<Bar dataKey="Population" fill="#82ca9d" />
      		</BarChart>
			</div>
		);
	}


}