import React, { Component } from 'react';
import logo from '../assets/blueberry_logo_white.svg';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="dropdown navigation">
          <div className="navbar-start">
            <a className="navbar-item">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Blueberry
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item has-text-dark">
                  Overview
                </a>
                <a className="navbar-item has-text-dark">
                  Elements
                </a>
                <a className="navbar-item has-text-dark">
                  Components
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
