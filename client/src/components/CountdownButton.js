import React, { Component } from 'react';
import './CountdownButton.css';

class CountdownButton extends Component {
  render() {
    return (
      <button className="CountdownButton">
        <span className="CountdownButton__label">3 hrs</span>
      </button>
    );
  }
}

export default CountdownButton;
