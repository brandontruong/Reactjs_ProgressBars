import React from 'react';
import NumericToggle from './NumericToggle.js';
import ProgressBar from './ProgressBar.js';
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

	handleChange(event) {
		var cBars = this.state.bars.slice();
		cBars.map((item, index) => cBars[index] = 0);
		//reset the bar incrementedBy
	    cBars[this.state.selectedBar] = parseInt(event.target.value, 10);
	    this.setState({bars: cBars});
	}

	handleBarChange(event) {
		var cBars = this.state.bars.slice();
		//reset the bar incrementedBy
		cBars.map((item, index) => cBars[index] = 0);
		this.setState({selectedBar: event.target.value, bars: cBars});
	}

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
				<h1>Progress Bars Demo</h1>
				
				<div>
					{bars.map((value, index) =>
						<ProgressBar incrementedBy={value} key={index} limit={limit} />
					)}
				</div>

				<div>
					<select onChange={this.handleBarChange.bind(this)}>
						{bars.map((item, index) =>
							<option key={index} value={index}>
								#progress{index + 1}
							</option>
						)}
					</select>
					<NumericToggle values={buttons} onChange={this.handleChange.bind(this)} />
				</div>
			</div>
		);
	}
}

export default App;
