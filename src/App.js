import React, { Component } from 'react';
import './App.scss';

import Navbar from './components/navbar';
// import Hero from './components/hero';
import Hero from './components/hero2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="body">
          <Hero></Hero>
        </div>
      </div>
    );
  }
}

export default App;
