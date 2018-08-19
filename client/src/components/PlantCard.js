import React, { Component } from 'react';
import Avatar from './Avatar';
import Button from './Button';

class PlantCard extends Component {
  renderHeader() {
    const { name, type } = this.props;
    return (
      <article style={{ marginBottom: '1rem' }} className="media">
        <figure className="media-left">
          <Avatar imageSrc="https://png.icons8.com/material/50/000000/plant-under-sun.png" />
        </figure>
        <div className="media-content">
          <p className="title is-3">{name}</p>
          <p className="subtitle is-5">{type}</p>
        </div>
      </article>
    );
  }

  renderDetailBar() {
    const { water, fertilizer } = this.props.history;
    return water.map(timestamp => <li>{timestamp}</li>);
  }

  renderActionBar() {
    const { onWaterClick, onFertilizeClick } = this.props;
    return (
      <nav className="level is-mobile">
        <div className="level-left">
          <div className="level-item">Goodbye</div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <Button color="success" onClick={onFertilizeClick}>
              Fertilize
            </Button>
          </div>
          <div className="level-item">
            <Button color="link" onClick={onWaterClick}>
              Water
            </Button>
          </div>
        </div>
      </nav>
    );
  }

  render() {
    return (
      <div className="box" style={{ marginBottom: '1rem' }}>
        {this.renderHeader()}
        {this.renderDetailBar()}
        {this.renderActionBar()}
      </div>
    );
  }
}

export default PlantCard;
