import React, { Component } from 'react';
import logo from '../assets/blueberry_logo_blue.svg';
import bush from '../assets/icon_bush.svg';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body center-everything flex-column height-100 padding--none">
          <div className="center-everything">
            <h1 className="title is-1 has-text-primary">Blueberry</h1>
            <img className="brand-logo" src={logo} alt="logo" />
          </div>
          <div className="bush">
            <img src={bush} alt="bush" />
            <div className="face one"></div>
            <div className="face two"></div>
            <div className="face three"></div>
            <div className="face four"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
