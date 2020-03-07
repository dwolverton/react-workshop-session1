import React, { Component } from 'react';
import './Grade.css';

class Grade extends Component {
  render() {
    return (
      <div className="Grade">
        <h3>Grade</h3>
        <p>
          <label>Title: </label> {this.props.title}
        </p>
        <p>
          <label>Score: </label> {this.props.score} {' '}
          {Math.round(this.props.score / this.props.total * 100)}%
        </p>
        <p>
          <label>Passing: </label> {this.props.passing ? "Yes" : "No"}
        </p>
      </div>
    );
  }
}

export default Grade;