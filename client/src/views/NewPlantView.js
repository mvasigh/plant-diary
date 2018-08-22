import React, { Component } from 'react';
import Section from '../components/Section';
import TextField from '../components/TextField';

class NewPlantView extends Component {
  renderNewPlantForm() {
    return (
      <form>
        <TextField label="Plant Name" />
        <TextField label="Type" />
      </form>
    );
  }

  render() {
    return (
      <div className="app-page">
        <Section>
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="box">
                <p className="title is-6 has-text-centered">Add a Plant</p>
                {this.renderNewPlantForm()}
              </div>
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default NewPlantView;
