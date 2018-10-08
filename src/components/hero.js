import React, { Component } from 'react';
import logo from '../assets/blueberry_logo_blue.svg';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-left"></div>
        <div className="hero-right"></div>
        {/* <div className="hero-body center-everything flex-column">
          <div className="bg-logo"></div>
          <p className="title is-1 has-text-primary margin-double--bottom has-text-centered">
            Blueberry
          </p>
          <p className="subtitle has-text-dark margin-double--bottom has-text-centered">
            Connecting lawyers to start-ups
          </p>
          <button className="button is-primary is-large is-rounded">Get started</button>
        </div> */}
      </section>
    );
  }
}

export default Hero;
