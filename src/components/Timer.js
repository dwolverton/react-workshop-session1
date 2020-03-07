import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  render() {
    return (
      <div className="Timer">
        <p><label>Start Time:</label> 3:45:17PM </p>
        <p><label>Elapsed</label> 0s </p>
        <p>
          <button>Start</button>
          <button>Stop</button>
        </p>
      </div>
    );
  }
}

export default Timer;