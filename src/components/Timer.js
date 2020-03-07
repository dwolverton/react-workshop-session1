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
    this.setState({startTime: null});
  }

  timerTick = () => {
    this.setState(prev => {
      let elapsed = new Date().getTime() - prev.startTime.getTime();
      elapsed = Math.round(elapsed / 1000);
      return { elapsed };
    });
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
          { this.state.startTime === null ?
            <button onClick={this.handleStart}>Start</button> :
            <button onClick={this.handleStop}>Stop</button> }
        </p>
      </div>
    );
  }
}

export default Timer;