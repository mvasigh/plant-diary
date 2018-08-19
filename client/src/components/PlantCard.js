import React, { Component } from 'react';

class PlantCard extends Component {
  renderHeader() {
    const { name, type } = this.props;
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img
              style={{
                borderRadius: '50%'
              }}
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </p>
        </figure>
        <div className="media-content">
          <p className="title is-3">{name}</p>
          <p className="subtitle is-5">{type}</p>
        </div>
      </article>
    );
  }

  renderDetailBar() {
    const { preferences } = this.props;
    const { waterFrequency, fertilizerFrequency, sunlightAmount } = preferences;
    return (
      <div className="level">
        <div className="level-item">{`water every ${waterFrequency} hrs`}</div>
        <div className="level-item">{`fert. ${fertilizerFrequency} days`}</div>
        <div className="level-item">{`${sunlightAmount} sun`}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="box">
        {this.renderHeader()}
        {this.renderDetailBar()}
      </div>
    );
  }
}

export default PlantCard;
