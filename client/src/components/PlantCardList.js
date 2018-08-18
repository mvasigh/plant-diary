import React, { Component } from 'react';
import PlantCard from './PlantCard';

export class PlantCardList extends Component {
  renderPlants() {
    const { plants } = this.props;
    return plants.map(plant => {
      <li key={plant._id}>
        <PlantCard {...plant} />
      </li>;
    });
  }

  render() {
    return <ul>{this.renderPlants()}</ul>;
  }
}

export default PlantCardList;
