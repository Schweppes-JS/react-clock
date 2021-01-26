import React, { Component } from 'react';
import { transform } from 'typescript';
import './Clock.css';

type ClockState = {
  seconds: number,
  minutes: number,
  hours: number
}

export class Clock extends Component<{}, ClockState> {

  tick() {
    this.setState({
      seconds: new Date().getSeconds(),
      minutes: new Date().getMinutes(),
      hours: new Date().getHours()
    });
  }

  componentWillMount() {
    this.tick();
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div className="app-container__dial">
        <div className="dial__digit-container">
          <p className="digit-container__digit">
            <span className="digit__number-1 digit__number">1</span>
          </p>
          <p className="digit-container__digit">
            <span className="digit__number-2 digit__number">2</span>
          </p>
          <p className="digit-container__digit">
            <span className="digit__number-3 digit__number">3</span>
          </p>
          <p className="digit-container__digit">
            <span className="digit__number-4 digit__number">4</span>
          </p>
          <p className="digit-container__digit">
            <span className="digit__number-5 digit__number">5</span>
          </p>
          <p className="digit-container__digit">
            <span className="digit__number-6 digit__number">6</span>
          </p>
          <p className="digit-container__digit">
            <span className="digit__number-7 digit__number">7</span>
          </p>
          <p className="digit-container__digit">
            <span className="digit__number-8 digit__number">8</span>
          </p>
          <p className="digit-container__digit">
            <span className="digit__number-9 digit__number">9</span>
          </p>
          <p className="digit-container__digit">
            <span className="digit__number-10 digit__number">10</span>
          </p>
          <p className="digit-container__digit">
            <span className="digit__number-11 digit__number">11</span>
          </p>
          <p className="digit-container__digit">
            <span className="digit__number-12 digit__number">12</span>
          </p>
        </div>
        <div className="dial__central-axis">
          <div className="central-axis__hour-arrow" style={{ transform: `rotate(${this.state.hours * 6}deg)` }}></div>
          <div className="central-axis__minute-arrow" style={{ transform: `rotate(${this.state.minutes * 6}deg)` }}></div>
          <div className="central-axis__second-arrow" style={{ transform: `rotate(${this.state.seconds * 6}deg)` }}></div>
        </div>
      </div >
    )
  }
}

export default Clock;
