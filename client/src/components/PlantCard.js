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

moment.relativeTimeThreshold('m', 60);
moment.relativeTimeThreshold('h', 24 * 26);

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
    const { water, fertilizer } = this.props.plant.history;
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
      <div className="tags">
        {waterTags}
        {fertilizerTags}
      </div>
    );
  }

  getTimeUntil = (historyArr, numToAdd, unit) => {
    const timeTil = moment(Math.max(...historyArr)).add(numToAdd, unit);
    return timeTil.isBefore(moment()) ? 'now' : timeTil.fromNow(true);
  };

  renderActionBar() {
    const { plant, classes, onWaterClick, onFertilizeClick } = this.props;
    const { history, preferences } = plant;

    const timeTilWater = this.getTimeUntil(
      history.water,
      preferences.waterFrequency,
      'hours'
    );
    const timeTilFertilizer = this.getTimeUntil(
      history.fertilizer,
      preferences.fertilizerFrequency,
      'days'
    );

    return (
      <CardActions>
        <Button
          color="secondary"
          className={classes.button}
          variant="extendedFab"
          onClick={onFertilizeClick}
        >
          <GrainIcon className={classes.extendedIcon} />
          {timeTilFertilizer}
        </Button>
        <Button
          color="primary"
          className={classes.button}
          variant="extendedFab"
          onClick={onWaterClick}
        >
          <WavesIcon className={classes.extendedIcon} />
          {timeTilWater}
        </Button>
      </CardActions>
    );
  }

  render() {
    const { plant, classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar>{plant.name[0]}</Avatar>}
          title={plant.name}
          titleTypographyProps={{ variant: 'headline' }}
          subheader={plant.type}
          subheaderTypographyProps={{ variant: 'subheading' }}
        />
        <CardContent>{this.renderDetailBar()}</CardContent>
        {this.renderActionBar()}
      </Card>
    );
  }
}

export default withStyles(styles)(PlantCard);
