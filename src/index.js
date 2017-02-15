import React from 'react';
import ReactDOM from 'react-dom';
import countries from './countryInfo.json'

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="container">
				 jkjkjkjk
				 {countries.length}
			</div>
		);
	}
}


ReactDOM.render(<App/>, document.getElementById('main-container'));
