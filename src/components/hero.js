import React, { Component } from 'react';
import logo from '../assets/blueberry_logo_blue.svg';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-left"></div>
        <div className="hero-right"></div>
        <div className="hero-body center-everything">
          <div className="hero-content-left center-everything flex-column">
            <h2 className="title is-2 has-text-white">For Businesses</h2>
            <div className="card has-rounded-corners">
              <div class="card-content">
                <p class="text is-6">
                  Find a lawyer and get a quote in minutes.
                </p>
              </div>
            </div>
          </div>
          <div className="hero-content-right center-everything flex-column">
            <h2 className="title is-2 has-text-primary">For Lawyers</h2>
            <div className="card has-rounded-corners">
              <div class="card-content">
                <p class="text is-6">
                  Get hired for jobs that suit your skills and availability.
                </p>
              </div>
            </div>
          </div>
        </div>
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
