import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar has-shadow">
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/plants/new" className="navbar-item">
              New Plant
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
