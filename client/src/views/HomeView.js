import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PlantCardList from '../components/PlantCardList';
import { getPlant, getAllPlants } from '../actions/PlantsActions';

class HomeView extends Component {
  componentDidMount() {
    this.props.getAllPlants();
  }

  // TODO: figure out why card list of plants is not rendering
  renderPlantList() {
    const plants = _.toArray(this.props.plants);
    return <PlantCardList plants={plants} />;
  }

  render() {
    return (
      <div className="app-page">
        <section className="section">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              {this.renderPlantList()}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({ plants: state.plants });

export default connect(
  mapStateToProps,
  { getPlant, getAllPlants }
)(HomeView);
