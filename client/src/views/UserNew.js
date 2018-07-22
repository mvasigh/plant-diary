import React, { Component } from 'react';

class UserNew extends Component {
  renderNewUserForm() {
    return (
      <form>
        <div className="field">
          <label className="label">Email address:</label>
          <div className="control">
            <input className="input" type="email" />
          </div>
        </div>
        <div className="field">
          <label className="label">Password:</label>
          <div className="control">
            <input className="input" type="password" />
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
              <div className="box">{this.renderLoginForm()}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UserNew;
