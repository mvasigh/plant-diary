import React, { Component } from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import {
  red,
  yellow,
  orange,
  green,
  blue,
  purple
} from '@material-ui/core/colors';
import {
  Paper,
  ButtonBase,
  Typography,
  CircularProgress
} from '@material-ui/core';
import './CountdownButton.css';

const colors = { red, yellow, orange, green, blue, purple };

const styles = theme => ({
  root: {
    padding: 0,
    borderRadius: '50%',
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2
  },
  button: {
    borderRadius: '50%',
    zIndex: 99
  }
});

class CountdownButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expired: false
    };
  }

  getButtonStyle = expired => {
    const colorFamily = colors[this.props.color];
    const { theme } = this.props;
    const backgroundColor = expired
      ? colorFamily[700]
      : theme.palette.background.default;
    const color = expired ? theme.palette.common.white : colorFamily[700];
    return {
      backgroundColor,
      color,
      height: '5.6rem',
      width: '5.6rem',
      padding: '0.8rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: '50%'
    };
  };

  getProgressStyle = expired => {
    const colorFamily = colors[this.props.color];
    const { theme } = this.props;
    const color = expired ? theme.palette.common.white : colorFamily[700];
    return {
      position: 'absolute',
      margin: 'auto',
      color
    };
  };

  getContentStyle = (type, expired) => {
    const { theme } = this.props;
    const color = expired
      ? theme.palette.common.white
      : theme.palette.text.primary;
    let style;
    if (type === 'icon') {
      style = {
        margin: '-0.4rem'
      };
    } else if (type === 'text') {
      style = {
        fontSize: '0.75rem',
        lineHeight: '1rem'
      };
    }
    return { ...style, color };
  };

  render() {
    const { label, icon, classes, progress, onClick } = this.props;
    const { expired } = this.state;

    return (
      <Paper className={classes.root} elevation={8}>
        <ButtonBase component="a" className={classes.button} onClick={onClick}>
          <CircularProgress
            style={this.getProgressStyle(expired)}
            variant="static"
            thickness={1.6}
            size={80}
            value={progress}
          />
          <div style={this.getButtonStyle(expired)}>
            <span style={this.getContentStyle('icon', expired)}>{icon}</span>

            <Typography
              style={this.getContentStyle('text', expired)}
              variant="button"
              gutterBottom={false}
            >
              {label}
            </Typography>
          </div>
        </ButtonBase>
      </Paper>
    );
  }
}

export default withStyles(styles)(withTheme()(CountdownButton));
