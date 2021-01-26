import React, { Component } from 'react';
import './Clock.css';

export class Clock extends Component {

  private date: Date;

  constructor(props: any) {
    super(props);
    this.date = new Date();
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
          <div className="central-axis__hour-arrow"></div>
          <div className="central-axis__minute-arrow"></div>
          <div className="central-axis__second-arrow"></div>
        </div>
      </div>
    )
  }
}

export default Clock;