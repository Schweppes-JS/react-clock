import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import TimeZone from './components/TimeZone';

class App extends Component {
  render() {
    return (
      <div className="root-container__app-container">
        <Clock />
        <TimeZone />
      </div>
    )
  }
}

export default App;