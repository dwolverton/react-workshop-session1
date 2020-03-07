import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
      <div className="Contact">
        <h3>Contact</h3>
        <p>
          <label>Name: </label> {this.props.name}
        </p>
        <p>
          <label>Age: </label> {this.props.age}
        </p>
      </div>
    )
  }
}

export default Contact;