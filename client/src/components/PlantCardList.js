import React, { Component } from 'react';
import PlantCard from './PlantCard';

class PlantCardList extends Component {
  renderPlants() {
    const {
      plants,
      onWaterClick,
      onFertilizeClick,
      secondaryAction
    } = this.props;
    return plants.map((plant, i) => (
      <li key={i}>
        <PlantCard
          plant={{ ...plant }}
          onWaterClick={() => {
            onWaterClick(plant._id);
            return secondaryAction(`You watered ${plant.name}`);
          }}
          onFertilizeClick={() => onFertilizeClick(plant._id)}
        />
      </li>
    ));
  }

  render() {
    return <ul>{this.renderPlants()}</ul>;
  }
}

export default PlantCardList;
