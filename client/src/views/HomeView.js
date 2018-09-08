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
import { showToast } from '../actions/ToasterActions';
import { Typography } from '@material-ui/core';
import Section from '../components/Section';

class HomeView extends Component {
  componentDidMount() {
    this.props.getAllPlants();
  }

  renderPlantList() {
    const plants = _.toArray(this.props.plants);
    if (plants.length === 0) {
      return <Typography>No plants</Typography>;
    }
    const { waterPlant, fertilizePlant, showToast } = this.props;
    return (
      <PlantCardList
        plants={plants}
        onWaterClick={waterPlant}
        onFertilizeClick={fertilizePlant}
        secondaryAction={showToast}
      />
    );
  }

  render() {
    return <Section>{this.renderPlantList()}</Section>;
  }
}

const mapStateToProps = state => ({ plants: state.plants });

export default connect(
  mapStateToProps,
  { getPlant, getAllPlants, waterPlant, fertilizePlant, showToast }
)(HomeView);
