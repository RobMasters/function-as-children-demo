import React from 'react';
import Child from './Child';

class ThemeParent extends React.Component {
  render() {
    console.log('Rendering light/dark parent');

    return (
      <div className="parent parent--flashing">
        <h5>Theme Parent component</h5>

        <Child>
          {(count, button) => (
            <div className={`parent__inner ${count % 2 === 0 ? 'light' : 'dark'}`}>
              {button}
            </div>
          )}
        </Child>
      </div>
    );
  }
}

export default ThemeParent;
