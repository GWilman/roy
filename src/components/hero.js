import React, { Component } from 'react';
import logo from '../assets/blueberry_logo_white.svg';

class Navbar extends Component {
  render() {
    return (
      <section class="hero">
        <div class="hero-body bg-hands">
          <p class="title is-1 has-text-primary margin-double--bottom">
            Blueberry
          </p>
          <p class="subtitle has-text-white margin-double--bottom">
            Connecting lawyers to start-ups
          </p>
          <button class="button is-primary is-large is-rounded">Get started</button>
        </div>
      </section>
    );
  }
}

export default Navbar;
