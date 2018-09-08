import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlant, updatePlant } from '../actions/PlantsActions';
import Section from '../components/Section';
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  CardActions
} from '@material-ui/core';

class NewPlantView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      type: '',
      waterFrequency: 24,
      fertilizerFrequency: 30,
      sunlightAmount: 'full-sun'
    };
  }

  componentDidMount() {
    const { plantId } = this.props.match.params;
    this.props.getPlant(plantId);
    const plant = this.props.plants[plantId];
    if (plant) {
      this.setState({
        name: plant.name,
        type: plant.type,
        waterFrequency: plant.preferences.waterFrequency,
        fertilizerFrequency: plant.preferences.fertilizerFrequency,
        sunlightAmount: 'full-sun'
      });
    }
  }

  handleInputChange = name => e => {
    this.setState({ [name]: e.target.value });
  };

  handlePlantSubmit = e => {
    e.preventDefault();
    const preferences = {
      waterFrequency: this.state.waterFrequency,
      fertilizerFrequency: this.state.fertilizerFrequency,
      sunlightAmount: this.state.sunlightAmount
    };
    const plant = {
      name: this.state.name,
      type: this.state.type,
      preferences: preferences
    };
    this.props.updatePlant(this.props.match.params.plantId, plant);
    this.props.history.push('/');
  };

  renderNewPlantForm() {
    const { name, type, waterFrequency, fertilizerFrequency } = this.state;
    return (
      <CardContent>
        <TextField
          fullWidth
          margin="normal"
          value={name}
          onChange={this.handleInputChange('name')}
          label="Plant Name"
          placeholder="Biscuit"
        />
        <TextField
          fullWidth
          margin="normal"
          value={type}
          onChange={this.handleInputChange('type')}
          label="Plant Type"
          placeholder="Hibiscus"
        />
        <TextField
          fullWidth
          margin="normal"
          type="number"
          inputProps={{
            min: 1,
            max: 99,
            step: 1
          }}
          value={waterFrequency}
          onChange={this.handleInputChange('waterFrequency')}
          label="Water every how many hours?"
        />
        <TextField
          fullWidth
          margin="normal"
          type="number"
          inputProps={{
            min: 1,
            max: 999,
            step: 1
          }}
          value={fertilizerFrequency}
          onChange={this.handleInputChange('fertilizerFrequency')}
          label="Fertilize every how many days?"
        />
      </CardContent>
    );
  }

  render() {
    return (
      <Section>
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <Card>
              <CardHeader title="Edit Plant" />
              <form onSubmit={this.handlePlantSubmit}>
                {this.renderNewPlantForm()}
                <CardActions>
                  <Button type="submit" color="primary">
                    Save Plant
                  </Button>
                </CardActions>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    );
  }
}

const mapStateToProps = state => ({ plants: state.plants });

export default connect(
  mapStateToProps,
  { getPlant, updatePlant }
)(NewPlantView);
