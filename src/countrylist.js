import React from 'react';

export default class CountryList extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Countries</h1>
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
				    	{this.props.countries.map((c,i) => (
							<tr key={i}>
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
		);
	}

}
