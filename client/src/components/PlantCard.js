import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  Button,
  CardContent,
  IconButton,
  Grid,
  Typography
} from '@material-ui/core';
import GrainIcon from '@material-ui/icons/Grain';
import WavesIcon from '@material-ui/icons/Waves';
import EditIcon from '@material-ui/icons/Edit';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

moment.relativeTimeThreshold('m', 60);
moment.relativeTimeThreshold('h', 24 * 26);

const styles = theme => ({
  detail: {
    flexGrow: 1
  },
  iconDisplay: {
    textAlign: 'center'
  },
  detailIcon: {
    fontSize: 24,
    color: '#ccc'
  },
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
  getTimeUntil = (historyArr, numToAdd, unit) => {
    const timeTil = moment(Math.max(...historyArr)).add(numToAdd, unit);
    return timeTil.isBefore(moment()) ? 'now' : timeTil.fromNow(true);
  };

  getMostRecent = historyArr => {
    return moment(Math.max(...historyArr));
  };

  renderDetailBar() {
    const { plant, classes } = this.props;
    const iconDisplays = [
      {
        label: 'Last Watered',
        icon: <WavesIcon className={classes.detailIcon} />,
        detail: this.getMostRecent(plant.history.water).fromNow()
      },
      {
        label: 'Last Fertilized',
        icon: <GrainIcon className={classes.detailIcon} />,
        detail: this.getMostRecent(plant.history.fertilizer).fromNow()
      },
      {
        label: 'Sunlight',
        icon: <WbSunnyIcon className={classes.detailIcon} />,
        detail: _.startCase(plant.preferences.sunlight)
      }
    ].map((item, i) => (
      <Grid className={classes.iconDisplay} item xs={4} key={i}>
        {item.icon}
        <Typography>{item.label}</Typography>
        <Typography variant="caption">{item.detail}</Typography>
      </Grid>
    ));
    return (
      <Grid container className={classes.detail} spacing={0}>
        {iconDisplays}
      </Grid>
    );
  }

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
          avatar={<Avatar>{plant.name[0].toUpperCase()}</Avatar>}
          title={plant.name}
          titleTypographyProps={{ variant: 'headline' }}
          subheader={plant.type}
          subheaderTypographyProps={{ variant: 'subheading' }}
          action={
            <Link to={`/plants/${this.props.plant._id}/edit`}>
              <IconButton>
                <EditIcon />
              </IconButton>
            </Link>
          }
        />
        <CardContent>{this.renderDetailBar()}</CardContent>
        {this.renderActionBar()}
      </Card>
    );
  }
}

export default withStyles(styles)(PlantCard);
