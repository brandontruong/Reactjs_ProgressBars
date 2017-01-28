import React, { PropTypes } from 'react';

class ProgressBar extends React.Component {
  render () {
    const { value, limit } = this.props;
    const styles = {
      color: 'red',
      width: (value * 100) / limit + '%'
    };
    
    return (
      <div className={"progress-bar " + (limit < value ? 'overlimit' : '')} value={value}>
				{value}
				<div className="progressing" style={styles}></div>
			</div>
    );
  }
}

export default ProgressBar;
