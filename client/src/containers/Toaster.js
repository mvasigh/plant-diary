import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Snackbar, Button } from '@material-ui/core';
import { hideToast } from '../actions/ToasterActions';

console.log(hideToast);

class Toaster extends Component {
  render() {
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={this.props.open}
        autoHideDuration={5000}
        onClose={this.props.hideToast}
        message={<span>{this.props.message}</span>}
      />
    );
  }
}

export default connect(
  ({ toaster }) => ({ ...toaster }),
  { hideToast }
)(Toaster);
