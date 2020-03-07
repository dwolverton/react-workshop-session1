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

  handleCount = (diff) => {
    this.setState(prev => {
      return { count: prev.count + diff};
    });
  }

  render() {
    let additionClass = "";
    if (this.state.count < 0) {
      additionClass = " negative";
    }

    return (
      <div className={"Counter" + additionClass}>
        <p>{this.state.count}</p>
        <div>
          <button onClick={() => this.handleCount(-1)}>Down</button>
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleUp}>Up</button>
        </div>
      </div>
    )
  }
}

export default Counter;