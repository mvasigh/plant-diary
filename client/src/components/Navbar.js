import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';

const styles = {
  flex: {
    flexGrow: 1
  }
};

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="sticky" color="default">
        <Toolbar>
          <Typography variant="title" className={classes.flex}>
            <Link to="/">Plant Diary</Link>
          </Typography>
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/plants/new">
            <Button color="inherit">Add Plant</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
