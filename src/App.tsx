import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';

class App extends Component {
  render() {
    return (
      <div className="root-container__app-container">
        <Clock />
      </div>
    )
  }
}

export default App;