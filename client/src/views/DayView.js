import React, { Component } from 'react';
import Section from '../components/Section';

class DayView extends Component {
  renderDayNav() {
    return (
      <nav className="level">
        <div className="level-item">&larr; Previous day</div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">July 22, 2018</p>
            <p className="title">Today</p>
          </div>
        </div>
        <div className="level-item">Next day &rarr;</div>
      </nav>
    );
  }

  render() {
    return (
      <div className="app-page">
        <Section>{this.renderDayNav()}</Section>
      </div>
    );
  }
}

export default DayView;
