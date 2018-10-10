import React, { Component } from 'react';
import logo from '../assets/blueberry_logo_white.svg';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-fixed-top" role="navigation" aria-label="dropdown navigation">
          <div className="navbar-start">
            <a className="navbar-item">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <a className="navbar-link">
                Get Started
              </a>
              <a className="navbar-link">
                Login
              </a>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item has-text-dark">
                  Who we are
                </a>
                <a className="navbar-item has-text-dark">
                  What we do
                </a>
                <a className="navbar-item has-text-dark">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item has-text-dark">
                  &copy; Noonan LLP 2018
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
