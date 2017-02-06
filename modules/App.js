import React from 'react';
import ProgressBarApplication from './ProgressBarApplication.js';
import fetchData from './fetchData.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			bars: [],
			buttons: [],
			limit: 0,
			selectedBar: 0
		};
	};

	componentDidMount() {
		 fetchData(json => {
	      if (json !== undefined) {
	          this.setState({bars: json.bars, buttons: json.buttons, limit: json.limit});
	    	}});
	};

	render() {
		const { limit, bars, buttons } = this.state;

		return (
			<div>
				<ProgressBarApplication data={this.state} />
			</div>
		);
	}
}

export default App;
