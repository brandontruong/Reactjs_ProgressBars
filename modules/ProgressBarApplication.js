import React from 'react';
import NumericToggle from './NumericToggle.js';
import ProgressBar from './ProgressBar.js';

class ProgressBarApplication extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bars: [],
			buttons: [],
			limit: 0,
			selectedBar: 0
		};
	}  
	componentWillReceiveProps(nextProps) {
		this.setState({bars: nextProps.data.bars, buttons: nextProps.data.buttons, limit: nextProps.data.limit, selectedBar: 0});
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

	render() {
		const { limit, bars, buttons } = this.state;

		return (
			<div className="progress-bar-application">
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

export default ProgressBarApplication;
