import React, { Component } from 'react';

class TextField extends Component {
  render() {
    const { label } = this.props;
    return (
      <div className="field">
        {this.props.label ? <label className="label">{label}</label> : ''}
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder={this.props.placeholder}
          />
        </div>
      </div>
    );
  }
}

export default TextField;
