import React from 'react';

import NumericToggle from './NumericToggle.jsx';
import ProgressBar from './ProgressBar.jsx';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			bars: [],
			buttons: [],
			limit: 0,
			selectedBar: 0
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleBarChange = this.handleBarChange.bind(this);
	};

	handleChange(event) {
		var cBars = this.state.bars.slice();
		var newValue = parseInt(cBars[this.state.selectedBar]) + parseInt(event.target.value);
		if (newValue < 0) {
			newValue = 0;
		}
		cBars[this.state.selectedBar] = newValue;
		this.setState({bars: cBars});
	}

	handleBarChange(event) {
		this.setState({selectedBar: event.target.value});
	}

	componentDidMount() {
		fetch("http://frontend-exercise.apps.staging.digital.gov.au/bars")
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				if (json !== undefined) {
					this.setState({bars: json.bars, buttons: json.buttons, limit: json.limit});
				}
			});
	};

	render() {
		return (
			<div>
				<h1>Progress Bars Demo</h1>
				<h1>Limit: {this.state.limit}</h1>
				<div>
					{this.state.bars.map((value, index) =>
						<ProgressBar value={value} key={index} limit={this.state.limit} />
					)}
				</div>

				<div>
					<select onChange={this.handleBarChange}>
						{this.state.bars.map((item, index) =>
							<option key={index} value={index}>
								#progress{index + 1}
							</option>
						)}
					</select>
					<NumericToggle values={this.state.buttons} onChange={this.handleChange} />
				</div>
			</div>
		);
	}
}

export default App;
