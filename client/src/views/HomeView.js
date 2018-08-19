import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PlantCardList from '../components/PlantCardList';
import {
  getPlant,
  getAllPlants,
  waterPlant,
  fertilizePlant
} from '../actions/PlantsActions';

class HomeView extends Component {
  componentDidMount() {
    this.props.getAllPlants();
  }

  // TODO: figure out why card list of plants is not rendering
  renderPlantList() {
    const plants = _.toArray(this.props.plants);
    const { waterPlant, fertilizePlant } = this.props;
    return (
      <PlantCardList
        plants={plants}
        onWaterClick={waterPlant}
        onFertilizeClick={fertilizePlant}
      />
    );
  }

  render() {
    return (
      <div className="app-page">
        <section className="section">
          <div style={{ maxWidth: '720px' }} className="container">
            {this.renderPlantList()}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({ plants: state.plants });

export default connect(
  mapStateToProps,
  { getPlant, getAllPlants, waterPlant, fertilizePlant }
)(HomeView);
