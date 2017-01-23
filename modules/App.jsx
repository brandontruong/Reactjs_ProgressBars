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
	};

	handleChange(event) {
		var cBars = bars.slice();
		var newValue = parseInt(cBars[selectedBar]) + parseInt(event.target.value);
		if (newValue < 0) {
			newValue = 0;
		}
		cBars[selectedBar] = newValue;
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
		const { limit, bars, buttons } = this.state;

		return (
			<div>
				<h1>Progress Bars Demo</h1>
				<h1>Limit: {limit}</h1>
				<div>
					{bars.map((value, index) =>
						<ProgressBar value={value} key={index} limit={limit} />
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
