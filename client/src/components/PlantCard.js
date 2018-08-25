import React, { Component } from 'react';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  Button,
  CardContent
} from '@material-ui/core';
import GrainIcon from '@material-ui/icons/Grain';
import WavesIcon from '@material-ui/icons/Waves';

const styles = theme => ({
  card: {
    marginBottom: '24px'
  },
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

class PlantCard extends Component {
  renderDetailBar() {
    const { water, fertilizer } = this.props.history;
    const waterTags = water.map(entry => (
      <span key={entry} className="tag is-info">
        {moment(entry).fromNow()}
      </span>
    ));
    const fertilizerTags = fertilizer.map(entry => (
      <span key={entry} className="tag is-success">
        {moment(entry).fromNow()}
      </span>
    ));
    return (
      <div style={{ margin: '20px' }}>
        <div className="tags">
          {waterTags}
          {fertilizerTags}
        </div>
      </div>
    );
  }

  renderActionBar() {
    const { classes, onWaterClick, onFertilizeClick } = this.props;
    return (
      <CardActions>
        <Button
          color="secondary"
          className={classes.button}
          variant="extendedFab"
          onClick={onFertilizeClick}
        >
          <GrainIcon className={classes.extendedIcon} />
          Fertilize
        </Button>
        <Button
          color="primary"
          className={classes.button}
          variant="extendedFab"
          onClick={onWaterClick}
        >
          <WavesIcon className={classes.extendedIcon} />
          Water
        </Button>
      </CardActions>
    );
  }

  render() {
    const { classes, onWaterClick, onFertilizeClick } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar>{this.props.name[0]}</Avatar>}
          title={this.props.name}
          titleTypographyProps={{ variant: 'headline' }}
          subheader={this.props.type}
          subheaderTypographyProps={{ variant: 'subheading' }}
        />
        <CardContent>{this.renderDetailBar()}</CardContent>
        {this.renderActionBar()}
      </Card>
    );
  }
}

export default withStyles(styles)(PlantCard);
