import React, { Component } from 'react';
import PlantCard from './PlantCard';

class PlantCardList extends Component {
  renderPlants() {
    const { plants } = this.props;
    return plants.map((plant, i) => (
      <li key={i}>
        <PlantCard {...plant} />
      </li>
    ));
  }

  render() {
    return <ul>{this.renderPlants()}</ul>;
  }
}

export default PlantCardList;
