import React, { Component } from 'react';
import './Votes.css';

class Votes extends Component {

  state = {
    chocolate: 0,
    vanilla: 0,
    strawberry: 0
  }

  handleReset = () => {
    this.setState({
      chocolate: 0,
      vanilla: 0,
      strawberry: 0
    });
  }

  handleVote = (vote) => {
    this.setState(prev => ({ [vote]: prev[vote] + 1}));
  }

  render() {
    const total = Object.values(this.state).reduce((sum, n) => sum + n, 0) || 1;
    const percentages = {
      chocolate: percentage(this.state.chocolate, total),
      vanilla: percentage(this.state.vanilla, total),
      strawberry: percentage(this.state.strawberry, total)
    }

    return (
      <div className="Votes">
        <p><label>Chocolate:</label> {this.state.chocolate} ({percentages.chocolate})</p>
        <div className="Votes__bar Votes__bar--chocolate" style={{width: percentages.chocolate}}></div>
        <p><label>Vanilla:</label> {this.state.vanilla} ({percentages.vanilla})</p>
        <div className="Votes__bar Votes__bar--vanilla" style={{width: percentages.vanilla}}></div>
        <p><label>Strawberry:</label> {this.state.strawberry} ({percentages.strawberry})</p>
        <div className="Votes__bar Votes__bar--strawberry" style={{width: percentages.strawberry}}></div>
        <div className="Buttons">
          <button onClick={() => this.handleVote('chocolate')}>Chocolate</button>
          <button onClick={() => this.handleVote('vanilla')}>Vanilla</button>
          <button onClick={() => this.handleVote('strawberry')}>Strawberry</button>
        </div>
      </div>
    );
  }
}

function percentage(n, total) {
  return (n / total * 100).toFixed(1)  + "%";
}

export default Votes;