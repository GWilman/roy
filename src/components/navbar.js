import React, { Component } from 'react';
import logo from '../assets/blueberry_logo_white.svg';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar" role="navigation" aria-label="dropdown navigation">
          <a class="navbar-item">
            <img src={logo} alt="logo" />
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Blueberry
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item has-text-dark">
                Overview
              </a>
              <a class="navbar-item has-text-dark">
                Elements
              </a>
              <a class="navbar-item has-text-dark">
                Components
              </a>
              <hr class="navbar-divider" />
              <div class="navbar-item has-text-dark">
                Version 0.7.1
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
