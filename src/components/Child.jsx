import React from 'react';
import PropTypes from 'prop-types';

class Child extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    withLogging: PropTypes.bool,
  };

  static defaultProps = {
    withLogging: false,
  };

  state = {
    count: 0,
  };

  render() {
    if (this.props.withLogging) {
      console.log(`Rendering child component. Count = ${this.state.count}`);
    }

    const incrementButton = (
      <button
        onClick={() => this.setState(prevState => ({ count: prevState.count + 1 }))}
      >
        Increment
      </button>
    );

    return (
      <div className="child">
        <div className="child__count">
          {this.props.children(this.state.count, incrementButton)}
        </div>
      </div>
    );
  }
}


export default Child;
