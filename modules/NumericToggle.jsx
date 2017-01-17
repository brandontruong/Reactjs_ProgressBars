import React, { PropTypes } from 'react';

class NumericToggle extends React.Component {
  // static propTypes = {
  //   values: PropTypes.array.isRequired
  // };

  render () {
    return (
      <div className="buttons">
        {this.props.values.map((value, index) =>
          <button
            key={index}
            value={value}
            onClick={this.props.onChange.bind(this)}>
              {value}
          </button>
        )}
      </div>
    );
  }
}

export default NumericToggle;
