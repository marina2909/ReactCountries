import React from 'react';
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
				<Button title="Population chart" link="/populationChart" />
				<div>
					<table className="table table-hover">
						<thead>
							<tr>
								<th>Name</th>
								<th>Capital</th>
								<th>Area</th>
								<th>Population</th>
								<th>Continent</th>
							</tr>
						</thead>
						<tbody>
							{countries.map((c,i) => (
								<tr key={i} className="success">
									<td className="col-md-2"> 
										{c.Country} 
									</td>
									<td className="col-md-2"> 
										{c.Capital} 
									</td>
									<td className="col-md-2"> 
										{c.Area.toLocaleString()} 
									</td>
									<td className="col-md-2"> 
										{c.Population.toLocaleString()} 
									</td>
									<td className="col-md-2"> 
										{c.Continent} 
									</td>
								</tr>
							))} 
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

