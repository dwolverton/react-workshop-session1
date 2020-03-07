import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {

  render() {
    return (
      <div className="Counter">
        <p>7</p>
        <div>
          <button>Down</button>
          <button>Reset</button>
          <button>Up</button>
        </div>
      </div>
    )
  }
}

export default Counter;