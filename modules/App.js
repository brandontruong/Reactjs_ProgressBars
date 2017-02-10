import React, {Component} from 'react';
import axios from 'axios';
import ProgressBarApplication from './ProgressBarApplication.js';
//import fetchData from './fetchData.js';

export const BASE_URL = 'http://frontend-exercise.apps.staging.digital.gov.au/bars';
export const fetchData = () => {
	return axios.get(`${BASE_URL}`);
}

class App extends React.Component {
	
	constructor() {
		super();
		this.state = {
			loaded: false,
			bars: [],
			buttons: [],
			limit: 0,
			selectedBar: 0
		};
	};

	componentDidMount() {
		this.props.fetchData()
		.then(res => {
			this.setState({loaded: true, bars: res.data.bars, buttons: res.data.buttons, limit: (res.data.limit === undefined)? 100: res.data.limit});
		})
		 /*fetchData(json => {
	      if (json !== undefined) {
	          this.setState({bars: json.bars, buttons: json.buttons, limit: json.limit});
	    	}});*/
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

App.defaultProps = { fetchData: fetchData };

export default App;
