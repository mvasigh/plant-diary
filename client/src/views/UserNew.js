import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

class UserNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.firebase);
  }

  handleInputChange(e) {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.firebase);
  }

  renderNewUserForm() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">Email address:</label>
          <div className="control">
            <input
              value={email}
              id="email"
              className="input"
              type="email"
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password:</label>
          <div className="control">
            <input
              value={password}
              id="password"
              className="input"
              type="password"
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <button className="button is-primary">Log in</button>
      </form>
    );
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-desktop">
            <div className="column is-6 is-offset-3">
              <p className="title is-4">Create a new account</p>
              <div className="box">{this.renderNewUserForm()}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(({ firebase }) => ({ firebase }))(UserNew);
