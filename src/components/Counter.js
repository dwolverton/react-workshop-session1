import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {

  state = {
    count: 14
  }

  handleReset = () => {
    this.setState({ count: 0 });
  }

  handleUp = () => {
    this.setState(prev => {
      return { count: prev.count + 1};
    });
  }

  render() {
    return (
      <div className="Counter">
        <p>{this.state.count}</p>
        <div>
          <button>Down</button>
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleUp}>Up</button>
        </div>
      </div>
    )
  }
}

export default Counter;