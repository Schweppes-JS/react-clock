import React, { Component } from 'react';
import './Clock.css';

type ClockState = {
  seconds: number,
  minutes: number,
  hours: number
}

export class Clock extends Component<{}, ClockState> {

  state = {
    seconds: new Date().getSeconds() * 6,
    minutes: new Date().getMinutes() * 6,
    hours: (new Date().getHours() * 30) + (new Date().getMinutes() / 2)
  };

  private immovable: boolean = false;

  tick() {
    this.setState({
      seconds: this.state.seconds + 6,
      minutes: (new Date().getSeconds() === 59) ? (this.state.minutes + 6) : this.state.minutes,
      hours: this.state.hours + (new Date().getSeconds() === 59 ? 0.5 : 0)
    });
  }

  componentDidMount() {
    this.tick();
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
          <div className="central-axis__hour-arrow" style={{ transform: `rotate(${this.state.hours}deg)` }}></div>
          <div className="central-axis__minute-arrow" style={{ transform: `rotate(${this.state.minutes}deg)` }}></div>
          <div
            className={`central-axis__second-arrow ${this.immovable ? "immovable" : ""}`}
            style={{ transform: `rotate(${this.state.seconds}deg)` }}
          ></div>
        </div>
      </div >
    )
  }
}

export default Clock;
