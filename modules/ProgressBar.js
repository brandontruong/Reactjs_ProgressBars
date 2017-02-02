import React, { PropTypes } from 'react';

class ProgressBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		value: 0
		};
	}  
	componentWillMount () {
        this.setState({value: (this.props.value < 0 ? 0 : this.props.value )});
    };
	componentWillReceiveProps(nextProps) {
		this.setState({value: (nextProps.value < 0 ? 0 : nextProps.value )});
	};
    render () {
		const { limit } = this.props;
		const styles = {
			width: (this.state.value * 100) / limit + '%'
		};
		
		return (
			<div className={"progress-bar " + (limit < this.state.value ? 'overlimit' : '')} value={this.state.value}>
				{this.state.value}
				<div className="progressing" style={styles}></div>
			</div>
		);
	}
}

export default ProgressBar;
