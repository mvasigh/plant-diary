import React, { Component } from 'react';

class UserLogin extends Component {
  renderLoginForm() {
    return (
      <form>
        <div className="field">
          <label className="label">Email address:</label>
          <div className="control">
            <input className="input" type="email" required />
          </div>
        </div>
        <div className="field">
          <label className="label">Password:</label>
          <div className="control">
            <input className="input" type="password" required />
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
              <p className="title is-4">Log in to your account</p>
              <p className="subtitle is-6">Don't have an account? Register</p>
              <div className="box">{this.renderLoginForm()}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UserLogin;
