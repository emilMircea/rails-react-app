// import './../style.css';
import React from 'react';
import { render } from 'react-dom';

class Hello extends React.Component  {
  render() {
    return(
      <div className="hello">
        <p>Hello from react</p>
      </div>
    )
  }
}

render(<Hello />, document.getElementById('root'))
