import React, { Component } from 'react';

class PosNegNumber extends Component {

  render() {
    let color = "black";
    if (this.props.number < 0) {
      color = "red";
    } else if (this.props.number > 0) {
      color = "dodgerblue"
    }
    
    return (
      <span className="PosNegNumber" style={{color: color}}>
        {this.props.number}
      </span>
    );
  }
}

export default PosNegNumber;