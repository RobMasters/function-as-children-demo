import React from 'react';
import Child from './Child';

class Parent extends React.Component {
  render() {
    console.log('Rendering parent component.');

    return (
      <div className="parent parent--logging">
        <h5>Logging Parent component</h5>

        <Child withLogging>
          {(count, button) => (
            <p>
              The current count is: <span className="count">{count}</span>. {button}
            </p>
          )}
        </Child>
      </div>
    );
  }
}

export default Parent;
