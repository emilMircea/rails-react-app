import React from 'react';
import { render } from 'react-dom';

class Hello extends React.Component  {
  render() {
    return(
      <div className="hello">
        <p>Hello from the component inside the components folder</p>
      </div>
    )
  }
}

export default Hello;
