import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {

  state = {
    startTime: null,
    elapsed: 0
  }

  handleStart = () => {
    this.setState({
      startTime: new Date(),
      elapsed: 0
    });
    this.interval = setInterval(this.timerTick, 1000);
  }

  handleStop = () => {
    clearInterval(this.interval); // stop the ticking!
  }

  timerTick = () => {
    console.log('tick');
  }

  render() {
    let startTime;
    if (this.state.startTime) {
      startTime = this.state.startTime.toLocaleTimeString();
    } else {
      startTime = "Stopped";
    }

    return (
      <div className="Timer">
        <p><label>Start Time:</label> {startTime} </p>
        <p><label>Elapsed</label> {this.state.elapsed}s </p>
        <p>
          <button onClick={this.handleStart}>Start</button>
          <button>Stop</button>
        </p>
      </div>
    );
  }
}

export default Timer;