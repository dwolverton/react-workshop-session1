import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  render() {
    let secondStyle = {
      transform: `rotate(${this.props.seconds * 6}deg)`
    }
    return (
      <div className="Clock">
        <div className="Clock__seconds" style={secondStyle}></div>
      </div>
    );
  }
}

export default Clock;